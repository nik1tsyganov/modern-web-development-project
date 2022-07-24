import React, { useEffect, useState } from "react";
import {
  TestResponse
} from "../../Common/Services/TestService";
import {
    createUserScore
} from "../../Common/Services/ScoreService";
import {
    UpdateScore
} from "../../Common/Services/UpdateScore";

const ScoreView = () => {

        const [score, setScore] = useState(0);

        useEffect(() => {
    
            // calls and returns promises from service calls for each category
            Promise.all([TestResponse("authors"), TestResponse("artists"), TestResponse("historicals")]).then((results) => {

                if (typeof results[0] !== "undefined") {
                    // filters user response objects into categories
                    let artistsScore = results.filter(result => result.attributes.category === "artists")
                    let authorsScore = results.filter(result => result.attributes.category === "authors")
                    let historicalsScore = results.filter(result => result.attributes.category === "historicals")

                    // calculates user score
                    let scoreTot = 0;
                    if (artistsScore[0].attributes.response === "Vincent Van Gogh"){
                        scoreTot += 1;
                    }
                    if (authorsScore[0].attributes.response === "Hunter S. Thompson"){
                        scoreTot += 1;
                    }
                    if (historicalsScore[0].attributes.response === "Agamemnon"){
                        scoreTot += 1;
                    }

                    setScore(scoreTot)

                    // calls service to update user score
                    UpdateScore(scoreTot).then((result) => {
                        console.log(result)
                    });

                    // calls service to create new user score object
                    return createUserScore(scoreTot).then((userScore) => {
                        return userScore
                    });
                }
            });
    
        }, []);
      
        return (
        <div>
            <h1 className="head">Score</h1>
            <h1>{score}</h1>
        </div>
        );
      };
      
      export default ScoreView;