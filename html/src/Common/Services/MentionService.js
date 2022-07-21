import Parse from "parse";

export const getUsername = () => {

    const user = Parse.Object.extend("User");
    const query = new Parse.Query(user);
    return query.find().then((results) => {
        return results;
    });
};