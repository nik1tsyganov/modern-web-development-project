import Parse from "parse";

export const getAllRatings = () => {
    const Rating = Parse.Object.extend("Rating");
    const query = new Parse.Query(Rating);
    return query.find().then((results) => {
        return results;
});
};
