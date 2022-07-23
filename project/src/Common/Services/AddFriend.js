import Parse from 'parse';

export const addFriend = async (friendId) => {
    // This is so that the Creating: ... is displayed in the console and the user can see his/her input is recorded

    var currentUser = Parse.User.current();
    

    const Friend = Parse.Object.extend("Friend")
    const friend = new Friend

    let query = new Parse.Query(Friend);

    // add query testing if user exists with that username
    query.equalTo("friend", friendId)
    query.equalTo("user", currentUser.attributes.username)

    let user = await query.first()

    console.log("User Test")
    console.log(user)
    console.log(typeof user)

    // try {
    //     let user = await query.first()

    // } catch (error) {

    // }

    
    return currentUser.save().then((result) => {
        return result;
    });
  };