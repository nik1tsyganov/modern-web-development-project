import Parse from 'parse';

export const createUserScore = (score) => {
    // This is so that the Creating: ... is displayed in the console and the user can see his/her input is recorded

    var currentUser = Parse.User.current();
    var username = currentUser.attributes.username;

    const UserResponse = Parse.Object.extend("UserScore");
    const userResponse = new UserResponse();

    userResponse.set("user", username);
    userResponse.set("score", score);
    
    return userResponse.save().then((result) => {
        return result;
    });
  };