import React from "react";
import SelectModule from "./../Select/SelectMain.js";
import RateModule from "./../Rate/RateMain.js";


const Historical = () => {
  return (
    <div>
      <SelectModule />
      <RateModule />
      <br />
      <p>Where would you like to go next?</p>
    </div>
  );
};

export default Historical;