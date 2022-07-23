import React from "react";
import SelectArtistView from "./SelectArtistView";

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const SelectArtistModule = (className) => {
  return (
    <div>
      <SelectArtistView className={className} />
    </div>
  );
};

export default SelectArtistModule;