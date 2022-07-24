import Parse from 'parse';

// creates new UserScore
export const createUserScore = (score) => {

    var currentUser = Parse.User.current();
    var username = currentUser.attributes.username;

    const userScore = Parse.Object.extend("UserScore");
    const UserScore = new userScore();

    UserScore.set("user", username);
    UserScore.set("score", score);

    return UserScore.save().then((result) => {
        return result;
    });
  };