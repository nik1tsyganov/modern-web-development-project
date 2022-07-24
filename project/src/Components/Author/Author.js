import React from "react";
import SelectModule from "../Select/SelectMain.js";
import QuizFooterAuthor from "../Footer/QuizFooterAuthor";
import RateModule from "../Rate/RateMain.js";
import Image from "../../Images/HunterSThompson.jpg";

/* Historical component displays select and rate modules*/
const Author = () => {
  return (
    <div>
      {/* This takes in the Parent + Child components and in this case there are two of them */}
      <div>
        <h1 className="head">Pick the author</h1>
        <div>
          <img src={Image} alt="HunterSThompson" width="275" height="300" />
        </div>
      </div>

      {/* This component allows the user to pick which historical figure it is on the photo or write their own answer */}
      <SelectModule className={"authors"} /> 

      {/* THis component allows the user to rate the website and sends data to back4app database */}
      <RateModule />
      {/* Change this to route to score */}
      <QuizFooterAuthor />
    </div>
  );
};

export default Author;