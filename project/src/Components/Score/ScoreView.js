import React, { useEffect, useState } from "react";
import {
  TestResponse
} from "../../Common/Services/TestService";
import {
    createUserScore
} from "../../Common/Services/ScoreService";

// const ScoreView = () => {

//     const [scores, setScore] = useState([]);
//     const [scoreTot, setScoreTot] = useState(0);
  
//     useEffect(() => {

//         TestResponse("authors").then((score) => {
//             if (score.attributes.response === "Hunter S. Thompson"){
//                 console.log("big goofy");
//                 setScore([...scores, 1]);
//             }
        
//         });

//         TestResponse("artists").then((score1) => {
//             if (score1.attributes.response === "Vincent Van Gogh"){
//                 console.log("bigger goofy");
//                 setScore([...scores, 1]);
//             }
//         });

//         TestResponse("historicals").then((score2) => {
//             if (score2.attributes.response === "Agamemnon"){
//                 console.log("biggest goofy");
//                 setScore([...scores, 1]);
//             }
//         });

//         let sum = 0

//         for (let i = 0; i < 
//             scores.length; i += 1) {
//             sum += scores[i]
//         }

//         setScoreTot([scoreTot, sum])

//         createUserScore().then((result) => {
//             //console.log(result)
//       });

//     }, []);
  

//     // useEffect(() => {
//     //     //console.log("heeby")
//     //     //console.log(scores)
//     //     let sum = 0

//     //     for (let i = 0; i < 
//     //         scores.length; i += 1) {
//     //         sum += scores[i]
//     //     }

//     //     setScoreTot([scoreTot, sum])

//     //     createUserScore().then((result) => {
//     //         console.log(result)
//     //   });
//     // }, [scores]);
  
//     return (
//     <div>
//         <h1 className="head">Score</h1>
//         <h1>{scoreTot}</h1>
//     </div>
//     );
//   };
  
//   export default ScoreView;

const ScoreView = () => {

        const [scores, setScore] = useState([]);
        const [scoreTot, setScoreTot] = useState(0);
        const [done1, setDone1] = useState(false);
        const [done2, setDone2] = useState(false);
        const [done3, setDone3] = useState(false);
      
        useEffect(() => {
    
            TestResponse("authors").then((score) => {
                if (score.attributes.response === "Hunter S. Thompson"){
                    console.log("big goofy");
                    setScore([...scores, 1]);
                    setDone1([done1, true]);
                }
            
            });
    
            TestResponse("artists").then((score1) => {
                if (score1.attributes.response === "Vincent Van Gogh"){
                    console.log("bigger goofy");
                    setScore([...scores, 1]);
                    setDone2([done2, true]);
                }
            });
    
            TestResponse("historicals").then((score2) => {
                if (score2.attributes.response === "Agamemnon"){
                    console.log("biggest goofy");
                    setScore([...scores, 1]);
                    setDone3([done3, true]);
                }
            });
    
            // const someasync = async () => {
            //     try { 
            //      const res = await asyncCalls(value);
            //      setTimeout(() => {
            //        loaded && setChildValue(res);
            //     }, 1000);
            //     } catch (e) {
            //        alert(e);
            //     }
            //   }

            if (done1 && done2 && done3) {
                let sum = 0
                console.log("scores")
                console.log(scores)
        
                for (let i = 0; i < 
                    scores.length; i += 1) {
                    sum += scores[i]
                }
        
                setScoreTot([scoreTot, sum])
        
                createUserScore().then((result) => {
                    //console.log(result)
                });
            }
    
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
            <h1>{scoreTot}</h1>
        </div>
        );
      };
      
      export default ScoreView;