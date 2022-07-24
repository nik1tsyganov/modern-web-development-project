import Parse from 'parse';

// updates user high score
export const UpdateScore = (score) => {

    var currentUser = Parse.User.current();

    console.log("currentUser.attributes.score")
    console.log(currentUser.attributes.score)

    if (score > currentUser.attributes.score || typeof currentUser.attributes.score !== 'undefined'){

        currentUser.set("score", score);
        currentUser.save();
        currentUser.fetch();
    }

    return currentUser.save().then((result) => {
        return result;
    });
  };