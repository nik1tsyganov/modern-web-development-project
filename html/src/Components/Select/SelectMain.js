import React from "react";
import SelectView from "./SelectView";

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const SelectModule = (className) => {
  return (
    <div>
      <SelectView className={className}/>
    </div>
  );
};

export default SelectModule;