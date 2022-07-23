import Parse from 'parse';

export const getFriendId = (username) => {

    const User = Parse.Object.extend("_User");

    const query = new Parse.Query(User);

    query.equalTo('username', username);

    return query.first().then((result) => {
        return result.objectId
});

};