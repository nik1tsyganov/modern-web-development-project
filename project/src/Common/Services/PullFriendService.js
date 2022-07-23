import Parse from 'parse';

export const pullFriend = (friendId) => {

    const User = Parse.Object.extend("User");
    const query = new Parse.Query(User);

    query.equalTo('objectId', friendId);

    return query.first().then((result) => {
        return result
});

};