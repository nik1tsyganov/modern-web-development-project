import Parse from 'parse';

  export const TestResponse = (category) => {

    var currentUser = Parse.User.current();
    var username = currentUser.attributes.username;
    //let responseString = "Response"

    //const response = Parse.Object.extend(username.concat(responseString));
    const testResponse = Parse.Object.extend("userResponse");
    const query = new Parse.Query(testResponse);


    //testResponse = query.contains("user", username).contains("category", category).first()

    return query.contains("user", username).contains("category", category).first().find().then((results) => {
        return results;
});
};