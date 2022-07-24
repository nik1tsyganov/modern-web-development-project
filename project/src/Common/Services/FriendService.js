import Parse from 'parse';

// pulls friend objects associated with current user
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