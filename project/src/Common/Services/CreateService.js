import Parse from 'parse';

export const createUserResponse = (Name) => {
    console.log("Creating: ", Name);
    const UserResponse = Parse.Object.extend("UserResponse");
    const userResponse = new UserResponse();
    userResponse.set("name", Name);
    return userResponse.save().then((result) => {
        return result;
    });
  };