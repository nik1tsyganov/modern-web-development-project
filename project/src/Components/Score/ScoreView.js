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
    
            Promise.all([TestResponse("authors"), TestResponse("artists"), TestResponse("historicals")]).then((results) => {
                console.log(results)


                let artistsScore = results.filter(result => result.attributes.category === "artists")
                let authorsScore = results.filter(result => result.attributes.category === "authors")
                let historicalsScore = results.filter(result => result.attributes.category === "historicals")

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

                console.log("scoreTot")
                console.log(scoreTot)

                UpdateScore(scoreTot).then((result) => {
                    console.log(result)
                });

                return createUserScore(scoreTot).then((userScore) => {
                    console.log("userScore")
                    console.log(userScore)
                    return userScore
                });
            });
    
        }, []);
      
    
        // useEffect(() => {
        //     //console.log("heeby")
        //     //console.log(scores)
        //     let sum = 0
    
        //     for (let i = 0; i < 
        //         scores.length; i += 1) {
        //         sum += scores[i]
        //     }
    
        //     setScoreTot([scoreTot, sum])
    
        //     createUserScore().then((result) => {
        //         console.log(result)
        //   });
        // }, [scores]);
      
        return (
        <div>
            <h1 className="head">Score</h1>
            <h1>{score}</h1>
        </div>
        );
      };
      
      export default ScoreView;