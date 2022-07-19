import React from "react";
import SelectModule from "../SelectAuthor/SelectAuthorMain.js";
import Footer from "../Footer/Footer";
import RateModule from "../Rate/RateMain.js";

/* Historical component displays select and rate modules*/
const Author = () => {
  return (
    <div>
      {/* This takes in the Parent + Child components and in this case there are two of them */}

      {/* This component allows the user to pick which historical figure it is on the photo or write their own answer */}
      <SelectModule className={"authors"} /> 

      {/* THis component allows the user to rate the website and sends data to back4app database */}
      <RateModule />
      {/* Change this to route to score */}
      <Footer />
    </div>
  );
};

export default Author;