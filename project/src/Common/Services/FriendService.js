import Parse from 'parse';

export const getFriend = (friendUserName) => {

    const testResponse = Parse.Object.extend("User");

    const query = new Parse.Query(testResponse);

    query.equalTo('username', friendUserName);

    return query.first().then((result) => {
        return result;
});

};