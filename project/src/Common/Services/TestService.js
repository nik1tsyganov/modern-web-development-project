import Parse from 'parse';

  export const TestResponse = async (category) => {

    var currentUser = Parse.User.current();
    var username = currentUser.attributes.username;

    const testResponse = Parse.Object.extend("UserResponse");
    const query = new Parse.Query(testResponse);

    query.equalTo('user', username);
    query.equalTo('category', category);

    return query.first().then((results) => {
        return results;
});
};