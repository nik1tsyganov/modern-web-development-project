import Parse from 'parse';

export const getFriend = () => {

    var currentUser = Parse.User.current();

    const Friend = Parse.Object.extend("Friend");

    const query = new Parse.Query(Friend);

    var userPointer = {
        __type: 'Pointer',
        className: '_User',
        objectId: currentUser.id
      }

    query.equalTo('user', userPointer);

    return query.find().then((result) => {
        return result
});

};

// A - NHPDJYZeX9
// N - Dz2myzh6Xz
// B - M8HBPRJskv

// import Parse from 'parse';

// export const getFriend = (friendUserName) => {

//     const testResponse = Parse.Object.extend("User");

//     const query = new Parse.Query(testResponse);

//     query.equalTo('username', friendUserName);

//     return query.first().then((result) => {
//         return result;
// });