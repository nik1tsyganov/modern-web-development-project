import Parse from 'parse';

export const createUserScore = (score) => {
    // This is so that the Creating: ... is displayed in the console and the user can see his/her input is recorded

    var currentUser = Parse.User.current();
    var username = currentUser.attributes.username;

    // console.log("currentUser")
    // console.log(currentUser)

    const userScore = Parse.Object.extend("UserScore");
    const UserScore = new userScore();

    UserScore.set("user", username);
    UserScore.set("score", score);

    // console.log("currentUser.attributes.score")
    // console.log(currentUser.attributes.score)

    // if (score > currentUser.attributes.score){
    //     // console.log("WEEEEEE")

    //     currentUser.set("score", score);
    //     currentUser.save();
    //     currentUser.fetch();
    // }

    return UserScore.save().then((result) => {
        return result;
    });
  };