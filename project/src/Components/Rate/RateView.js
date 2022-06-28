import React, { useEffect, useState } from "react";
import {
  getAllRatings
} from "/Users/NikitaMac/Desktop/Modern Web Development/Homework/modern-web-development-project/project/src/Common/Services/RateService";
import {createUserResponse} from "/Users/NikitaMac/Desktop/Modern Web Development/Homework/modern-web-development-project/project/src/Common/Services/CreateService";
import RateForm from "./RateForm";


const RateView = () => {

    const [ratings, setRatings] = useState([]);
    const [userResponses, setUserResponses] = useState([]);
    const [name, setName] = useState();
  
    useEffect(() => {
      getAllRatings().then((ratings) => {
        setRatings(ratings);
      });
    }, []);
  
    const [add, setAdd] = useState(false);
  

    useEffect(() => {
      if (name && add) {
        createUserResponse(name).then((userResponse) => {
          setAdd(false);
          setUserResponses([...userResponses, userResponse]);
        });
      }
    }, [name, userResponses, add]);
  
    const onClickHandler = (e) => {
      e.preventDefault();
      setAdd(true);
      setName(e.target.value);
    };
  
    return (
    <div>
        <p>How do you like this website?</p>
        <div>
            <form className="rating">
              <select className="rate-pets">
                  {ratings.map((rating) => (
                    <option value={rating.get("name")}>{rating.get("name")}</option>))}
              </select>
              <RateForm onClick={onClickHandler} />
            </form>
        </div>
    </div>
    );
  };
  
  export default RateView;

