import React from "react";

/* STATELESS CHILD COMPONENT */
const SearchForm = ({ onChangeForm, onSubmitForm }) => {
  return (
    <div>
      <form>
        <input className="comments-search-textarea" text="test" onChange={onChangeForm} />
        <button className="comments-search-button" type="submit" onClick={onSubmitForm}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;