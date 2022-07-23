import React from "react";

/* STATELESS CHILD COMPONENT */
const SelectRadioForm = ({ Authors, onChangeForm, onSubmitForm }) => {
  return (
    <div>
      <form className="select" onClick={onSubmitForm} onChange={onChangeForm}>
      {/* The map function allos to iterate over the Authors array and get individual class Author objects */}
        {Authors.length > 0 && (
          Authors.map((Authors) => (
            <label>
               <input
                  type="radio"
                  key={Authors.id}
                  name="Author"
                  value={Authors.attributes.name}
                />{Authors.get("name")}
            </label>)))}
        </form>
    </div>
  );
};

const TextForm = ({ onChangeForm, onSubmitForm }) => {
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

export {TextForm, SelectRadioForm};