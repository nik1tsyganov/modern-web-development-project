import React from "react";
import SelectAuthorView from "./SelectAuthorView";

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const SelectModule = (className) => {
  return (
    <div>
      <SelectAuthorView className={className}/>
    </div>
  );
};

export default SelectModule;