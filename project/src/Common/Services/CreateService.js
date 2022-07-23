import Parse from 'parse';

export const createUserResponse = (response, category) => {
    // This is so that the Creating: ... is displayed in the console and the user can see his/her input is recorded
    console.log("Creating: ", response);
    var currentUser = Parse.User.current();

    var username = currentUser.attributes.username;

    const UserResponse = Parse.Object.extend("UserResponse");
    const userResponse = new UserResponse();

    userResponse.set("user", username);
    userResponse.set("response", response);
    userResponse.set("category", category);
    
    return userResponse.save().then((result) => {
        return result;
    });
  };

  /*
  export const createUserResponse = (response, category) => {
    // This is so that the Creating: ... is displayed in the console and the user can see his/her input is recorded
    var currentUser = Parse.User.current();
    username = currentUser.username
    let responseString = "Response"
    const UserResponse = Parse.Object.extend(username.concat(responseString));
    const userResponse = new UserResponse();
    userResponse.set("user", username);
    userResponse.set("response", response);
    userResponse.set("category", category);
    return userResponse.save().then((result) => {
        return result;
    });
  };
  */