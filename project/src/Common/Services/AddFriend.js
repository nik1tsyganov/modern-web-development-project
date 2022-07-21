import Parse from 'parse';

export const addFriend = (friend) => {
    // This is so that the Creating: ... is displayed in the console and the user can see his/her input is recorded

    var currentUser = Parse.User.current();

    var username = currentUser.attributes.username;

    const UserClass = Parse.Object.extend("User")

    const query = new Parse.Query(UserClass);
    query.equalTo("username", username)

    let user = await query.first

    let friends = user.friendsList

    friends.push(friend)

    query.set("friendsList", friends);
    
    return query.save().then((result) => {
        return result;
    });
  };