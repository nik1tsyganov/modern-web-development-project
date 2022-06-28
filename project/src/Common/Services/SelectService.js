import Parse from "parse";

export const getAllHistoricals = () => {
    const Historical = Parse.Object.extend("Historical");
    const query = new Parse.Query(Historical);
    return query.find().then((results) => {
        return results;
});
};

