import Parse from "parse";

// gets all names for a given class
export const getAllNames = (className) => {
    const givenClass = Parse.Object.extend(className);
    const query = new Parse.Query(givenClass);
    return query.find().then((results) => {
        return results;
});
};