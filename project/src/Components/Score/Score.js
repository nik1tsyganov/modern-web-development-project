import React from "react";
import ScoreFooter from "../Footer/ScoreFooter";
import ScoreView from "./ScoreView";

/* Historical component displays select and rate modules*/
const Score = () => {
  return (
    <div>
      {/* This takes in the Parent + Child components and in this case there are two of them */}

      {/* This component allows the user to pick which historical figure it is on the photo or write their own answer */}
      <ScoreView /> 

      {/* Change this to route to score */}
      <ScoreFooter />
    </div>
  );
};

export default Score;