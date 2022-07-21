import Parse from 'parse';

export const getAllFriends = async () => {

    var currentUser = Parse.User.current();
    var username = currentUser.attributes.username;

    console.log(username)
    const testResponse = Parse.Object.extend("User");

    const query = new Parse.Query(testResponse);
    query.equalTo('username', username);

    let queryResult = await query.first()

    console.log("queryResult")
    console.log(queryResult)

    var friends = queryResult.attributes.friendsList;
    console.log("friends")
    console.log(friends)

    return friends;

};