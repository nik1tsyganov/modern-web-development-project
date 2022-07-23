import Parse from 'parse';

export const UpdateScore = (score) => {
    // This is so that the Creating: ... is displayed in the console and the user can see his/her input is recorded

    var currentUser = Parse.User.current();

    console.log("currentUser.attributes.score")
    console.log(currentUser.attributes.score)

    if (score > currentUser.attributes.score || typeof currentUser.attributes.score !== 'undefined'){
        // console.log("WEEEEEE")

        currentUser.set("score", score);
        currentUser.save();
        currentUser.fetch();
    }

    return currentUser.save().then((result) => {
        return result;
    });
  };