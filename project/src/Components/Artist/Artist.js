import React from "react";
import SelectArtistModule from "../SelectArtist/SelectArtistMain.js";
import QuizFooterArtist from "../Footer/QuizFooterArtist";
import RateModule from "../Rate/RateMain.js";

/* Historical component displays select and rate modules*/
const Artist = () => {
  return (
    <div>
      {/* This takes in the Parent + Child components and in this case there are two of them */}

      {/* This component allows the user to pick which historical figure it is on the photo or write their own answer */}
      <SelectArtistModule className={"artists"}/> 

      {/* THis component allows the user to rate the website and sends data to back4app database */}
      <RateModule />
      <QuizFooterArtist />
    </div>
  );
};

export default Artist;