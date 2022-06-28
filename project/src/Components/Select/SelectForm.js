import React from "react";

/* STATELESS CHILD COMPONENT */
const SelectForm = ({ onChange, onClick }) => {
  return (
    <div>
      <form>
        <input text="test" onChange={onChange} />
        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SelectForm;