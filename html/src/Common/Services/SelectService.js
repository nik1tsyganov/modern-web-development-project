import Parse from "parse";

// All historical figures are acquired from the database
export const getAllNames = (className) => {
    const Historical = Parse.Object.extend(className);
    const query = new Parse.Query(Historical);
    return query.find().then((results) => {
        return results;
});
};