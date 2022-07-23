import Parse from 'parse';

export const createUserResponse = (Name) => {
    // This is so that the Creating: ... is displayed in the console and the user can see his/her input is recorded
    console.log("Creating: ", Name);
    const UserResponse = Parse.Object.extend("UserResponse");
    const userResponse = new UserResponse();
    userResponse.set("name", Name);
    return userResponse.save().then((result) => {
        return result;
    });
  };