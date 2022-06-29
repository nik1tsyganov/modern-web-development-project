import React, { useEffect, useState } from "react";
import {
  getAllRatings
} from "../../Common/Services/RateService";
import {createUserResponse} from "../../Common/Services/CreateService";
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
    };

    const onChangeHandler = (e) => {
      e.preventDefault();
      setName(e.target.value);
    };
  
    return (
    <div>
        <p>How do you like this website?</p>
        <div>
          <RateForm ratings={ratings} onFormSubmit={onClickHandler} onFormChange={onChangeHandler}/>
        </div>
        {/* This is for the footer on this page */}
        <br />
        <p>Where would you like to go next?</p>
    </div>
    );
  };
  
  export default RateView;