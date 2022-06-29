import Parse from "parse";

// All ratings are acquired from the database
export const getAllRatings = () => {
    const Rating = Parse.Object.extend("Rating");
    const query = new Parse.Query(Rating);
    return query.find().then((results) => {
        return results;
});
};
