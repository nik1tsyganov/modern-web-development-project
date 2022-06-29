import React from "react";
import SelectModule from "./../Select/SelectMain.js";
import RateModule from "./../Rate/RateMain.js";


const Historical = () => {
  return (
    <div>
      {/* This takes in the Parent + Child components and in this case there are two of them */}

      {/* This component allows the user to pick which historical figure it is on the photo or write their own answer */}
      <SelectModule /> 

      {/* THis component allows the user to rate the website and sends data to back4app database */}
      <RateModule />
    </div>
  );
};

export default Historical;