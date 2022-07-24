import React from "react";
import EndFooter from "../Footer/EndFooter";
import ScoreView from "./ScoreView";

const Score = () => {
  return (
    <div>
      {/* Component displays user score */}
      <ScoreView /> 

      {/* Allows user to navigate between pages */}
      <EndFooter />
    </div>
  );
};

export default Score;