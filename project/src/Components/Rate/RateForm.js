import React from "react";

/* STATELESS CHILD COMPONENT */
const RateForm = ({ratings, onFormSubmit, onFormChange }) => {
  return (
    <div>
      <form className="rating" onSubmit={onFormSubmit} onChange={onFormChange}>
              <select className="rate-pets">
                  {ratings.length > 0 && (ratings.map((rating) => (
                    <option key={rating.id} value={rating.get("name")}>{rating.get("name")}</option>)))}
              </select>
              {/* <RateForm onSubmit={onClickHandler} /> */}
              <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RateForm;