import Parse from 'parse';

export const addFriend = async (friend) => {
    // This is so that the Creating: ... is displayed in the console and the user can see his/her input is recorded

    var currentUser = Parse.User.current();

    var username = currentUser.attributes.username;

    const UserClass = Parse.Object.extend("User")

    const query = new Parse.Query(UserClass);
    query.equalTo("username", username)

    let user = await query.first()

    let friends = user.attributes.friendsList

    if (typeof friends !== 'undefined') {
        friends.push(friend)
        console.log("hehehehe")
    }
    else {
        friends = [friend]
        console.log("hahahaha")
    }
    
    console.log("friends")
    console.log(friends)
    currentUser.set("friendsList", friends);
    
    return currentUser.save().then((result) => {
        return result;
    });
  };