import React from "react";

/* STATELESS CHILD COMPONENT */
const SearchForm = ({ onChangeForm, onSubmitForm }) => {
  return (
    <div>
      <form>
        <input text="test" onChange={onChangeForm} />
        <button type="submit" onClick={onSubmitForm}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchForm;