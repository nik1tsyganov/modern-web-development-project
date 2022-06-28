import Parse from "parse";

export const createHistorical = (Name) => {
    console.log("Creating: ", Name);
    const Historical = Parse.Object.extend("Historical");
    const historical = new Historical();
    historical.set("name", Name);
    return historical.save().then((result) => {
        return result;
    });
  };


export const getAllHistoricals = () => {
    const Historical = Parse.Object.extend("Historical");
    const query = new Parse.Query(Historical);
    return query.find().then((results) => {
        return results;
});
};

