import Parse from "parse";

// All historical figures are acquired from the database
export const getAllHistoricals = () => {
    const Historical = Parse.Object.extend("Historical");
    const query = new Parse.Query(Historical);
    return query.find().then((results) => {
        return results;
});
};