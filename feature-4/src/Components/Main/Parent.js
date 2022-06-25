import Child from "Child.js";

/* imports child */

/* Parent function */
export default function Parent() {
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