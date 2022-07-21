import React, { useEffect, useState } from "react";
import Parse from 'parse';

  export const TestMultipleResponse = async (category1, category2, category3) => {

    const [scores, setScore] = useState([]);

    var currentUser = Parse.User.current();
    var username = currentUser.attributes.username;

    const testResponse = Parse.Object.extend("UserResponse");

    const query1 = new Parse.Query(testResponse);
    query1.equalTo('user', username);
    query1.equalTo('category', category1);

    const query2 = new Parse.Query(testResponse);
    query2.equalTo('user', username);
    query2.equalTo('category', category2);

    const query = new Parse.Query(testResponse);
    query.equalTo('user', username);
    query.equalTo('category', category3);

    //query._andQuery([query1, query2]);

    let queryResult = await query.first()
    let queryResult1 = await query1.first()
    let queryResult2 = await query2.first()

    console.log("queryResult")
    console.log(queryResult)

    if (queryResult.attributes.response === "Vincent Van Gogh"){
      //console.log("biggest goofy");
      setScore([...scores, 1]);
    }
    if (queryResult1.attributes.response === "Hunter S. Thompson"){
      //console.log("biggest goofy");
      setScore([...scores, 1]);
    }
    if (queryResult2.attributes.response === "Agamemnon"){
      //console.log("biggest goofy");
      setScore([...scores, 1]);
    }

//     return query.first().then((results) => {
//         return results;
// });
};