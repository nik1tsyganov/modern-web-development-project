import React from "react";

/* STATELESS CHILD COMPONENT */
const SelectRadioForm = ({ artists, onChangeForm, onSubmitForm }) => {
  return (
    <div>
      <form className="select" onClick={onSubmitForm} onChange={onChangeForm}>
      {/* The map function allos to iterate over the Artists array and get individual class Artist objects */}
        {artists.length > 0 && (
          artists.map((artists) => (
            <label>
               <input
                  type="radio"
                  key={artists.id}
                  name="artist"
                  value={artists.attributes.name}
                />{artists.get("name")}
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