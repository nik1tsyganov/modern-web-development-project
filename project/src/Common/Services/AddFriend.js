import Parse from 'parse';

export const addFriend = async (friend) => {
    // This is so that the Creating: ... is displayed in the console and the user can see his/her input is recorded

    var currentUser = Parse.User.current();

    var username = currentUser.attributes.username;

    const UserClass = Parse.Object.extend("User")

    let query1 = new Parse.Query(UserClass);
    let query2 = new Parse.Query(UserClass);

    // add query testing if user exists with that username
    query1.equalTo("username", username)
    query2.equalTo("username", friend)
    query2._andQuery([query1])

    let user = await query2.first()
    console.log("user")
    console.log(user)

    let friends = []

    if (typeof user == 'string') {
        console.log("string")
        if (user[0].attributes.username === username){
            friends = user[0].attributes.friendsList
        }
        else if (user[1].attributes.username === username){
            friends = user[1].attributes.friendsList
        }
    }

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