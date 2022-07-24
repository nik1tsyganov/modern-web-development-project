import React from "react";
import SelectModule from "../Select/SelectMain.js";
import QuizFooterArtist from "../Footer/QuizFooterArtist";
import RateModule from "../Rate/RateMain.js";
import Image from "../../Images/vangogh.jpg";

/* Historical component displays select and rate modules*/
const Artist = () => {
  return (
    <div>
      {/* This takes in the Parent + Child components and in this case there are two of them */}
      <div>
        <h1 className="head">Pick the artist</h1>
        <div>
          <img src={Image} alt="vangogh" width="275" height="300" />
        </div>
      </div>

      {/* This component allows the user to pick which historical figure it is on the photo or write their own answer */}
      <SelectModule className={"artists"}/> 

      {/* THis component allows the user to rate the website and sends data to back4app database */}
      <RateModule />
      <QuizFooterArtist />
    </div>
  );
};

export default Artist;