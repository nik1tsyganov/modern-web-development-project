import React from "react";

/* STATELESS CHILD COMPONENT */
const SelectRadioForm = ({ historicals, onChangeForm, onSubmitForm }) => {
  return (
    <div>
      <form className="select" onClick={onSubmitForm} onChange={onChangeForm}>
        {historicals.length > 0 && (
          historicals.map((historical) => (
            <label>
               <input
                  type="radio"
                  key={historical.id}
                  name="historical_figure"
                  value={historical.attributes.name}
                />{historical.get("name")}
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