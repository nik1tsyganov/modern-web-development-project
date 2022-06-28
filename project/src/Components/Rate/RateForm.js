import React from "react";

/* STATELESS CHILD COMPONENT */
const RateForm = ({ onClick }) => {
  return (
    <div>
      <form>
        <button type="submit" onSubmit={onClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RateForm;