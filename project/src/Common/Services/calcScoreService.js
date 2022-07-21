import React, { useEffect, useState } from "react";
import {
  TestResponse
} from "../../Common/Services/TestService";
import {
    createUserScore
} from "../../Common/Services/ScoreService";

const ScoreView = () => {

    const [scores, setScore] = useState([]);
    const [scoreTot, setScoreTot] = useState(0);
  
    useEffect(() => {

        TestResponse("authors").then((score) => {
            if (score.attributes.response === "Hunter S. Thompson"){
                console.log("big goofy");
                setScore([...scores, 1]);
            }
        
        });

        TestResponse("artists").then((score1) => {
            if (score1.attributes.response === "Vincent Van Gogh"){
                console.log("bigger goofy");
                setScore([...scores, 1]);
            }
        });

        TestResponse("historicals").then((score2) => {
            if (score2.attributes.response === "Agamemnon"){
                console.log("biggest goofy");
                setScore([...scores, 1]);
            }
        });

    }, []);
  
    return scores
  
  };
  
  export default ScoreView;