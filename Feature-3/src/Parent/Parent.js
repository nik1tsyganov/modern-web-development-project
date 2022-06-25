import React from 'react';
import Child from "../Child/Child.js";
/* imports child */

/* Parent function */
function Parent() {
  function clickAlert() {
    alert("Answer submitted");
  }
  /* calls child function on child click */
  return (
    <div class="app">
      <Child data="Submit" onChildClick="{clickAlert}" />
    </div>
  );
}

export default Parent;