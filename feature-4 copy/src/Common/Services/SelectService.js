import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */


// READ operation - get all lessons in Parse class Lesson
export const SelectFigure = () => {
    const figure = Parse.Object.extend("figure");
    const query = new Parse.Query(figure);
    return query.find().then((results) => {
      // returns array of Lesson objects
      return results;
    });
  };