import React, { useEffect, useState } from "react";
import {
  TestResponse
} from "../../Common/Services/TestService";
import {
    createUserScore
} from "../../Common/Services/ScoreService";

const ScoreView = () => {

    const [scoreTot, setScore] = useState(0);
  
    useEffect(() => {
        TestResponse("authors").then((score) => {
        console.log(score);
        if (score.name === "Hunter S. Thompson"){
            setScore([scoreTot, scoreTot+1]);
        }
        
      });
    }, []);
  

    useEffect(() => {
        TestResponse("artists").then((score) => {
        console.log(score);
        if (score.name === "Vincent Van Gogh"){
            setScore([scoreTot, scoreTot+1]);
        }
      });
    }, []);


    useEffect(() => {
        TestResponse("historicals").then((score) => {
        console.log(score);
        if (score.name === "Agamemnon"){
            setScore([scoreTot, scoreTot+1]);
        }
      });
    }, []);

    useEffect(() => {
        createUserScore(scoreTot).then((result) => {
        console.log(result);
      });
    }, []);
  
    return (
    <div>
        <h1 className="head">Score</h1>
        <h1>{scoreTot}</h1>
    </div>
    );
  };
  
  export default ScoreView;