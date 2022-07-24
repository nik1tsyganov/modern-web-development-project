import Parse from 'parse';

// adds new friend
export const addFriend = async (friendId) => {
    // This is so that the Creating: ... is displayed in the console and the user can see his/her input is recorded

    console.log("friendId")
    console.log(friendId)

    var currentUser = Parse.User.current();
    var userId = currentUser.id;
    
    const User = Parse.Object.extend("_User")

    const Friend = Parse.Object.extend("Friend")
    const friend = new Friend
    const friend2 = new Friend

    let query = new Parse.Query(Friend);
    let userQuery = new Parse.Query(User);

    userQuery.equalTo("username", friendId)
    let userTest = await userQuery.first()


    if (typeof userTest !== 'undefined'){
        console.log("User Test")
        console.log(userTest)
        console.log(typeof userTest)

        var userIdPointer = {
            __type: 'Pointer',
            className: '_User',
            objectId: userId
        }
        var friendIdPointer = {
            __type: 'Pointer',
            className: '_User',
            objectId: userTest.id
        }
    
        query.equalTo("friend", userIdPointer)
        query.equalTo("user", friendIdPointer)
        let friendTest = await query.first()

        // add query testing if user exists with that username

        if (typeof friendTest === 'undefined'){   
            console.log("Friend Test")
            console.log(friendTest)
            console.log(typeof friendTest)

            friend.set("user", userIdPointer)
            friend.set("friend", friendIdPointer)
            
            friend2.set("user", friendIdPointer)
            friend2.set("friend", userIdPointer)

            friend2.save();
            return friend.save().then((result) => {
                return result;
            });
        }
        else {
            alert("User is already your friend")
        }
    }
    else {
        alert("User does not exist")
    }
  };