import React, { useEffect, useState } from "react";
import {
  getAllNames
} from "../../Common/Services/SelectService";
import {createUserResponse} from "../../Common/Services/CreateService";
import {TextForm, SelectRadioForm} from "./SelectForm";

const SelectView = (className) => {

    className = className.className.className

    const [historicals, setHistoricals] = useState([]);
    const [userResponses, setUserResponses] = useState([]);
    const [response, setResponse] = useState();
  
    // calls service to fetch historical names
    useEffect(() => {
      getAllNames(className).then((historicals) => {
        console.log(historicals);
        setHistoricals(historicals);
      });
    }, []);
  
    const [add, setAdd] = useState(false);
  
    // calls service to create user response object from input
    useEffect(() => {
      if (response && add) {
        createUserResponse(response, className).then((userResponse) => {
          setAdd(false);
          setUserResponses([...userResponses, userResponse]);
        });
      }
    }, [response, userResponses, add]);
  
    // sets flag to create user response on click
    const onClickHandler = (e) => {
      e.preventDefault();
      setAdd(true);
    };

    // sets response from input on change
    const onChangeHandler = (e) => {
      e.preventDefault();
      console.log(e.target.value);
      setResponse(e.target.value);
    };
  
    return (
    <div>
        <div>
            <SelectRadioForm historicals={historicals} onSubmitForm={onClickHandler} onChangeForm={onChangeHandler} />
        </div>
        <p>Write in your own:</p>
            <TextForm onSubmitForm={onClickHandler} onChangeForm={onChangeHandler} />
        <br />
    </div>
    );
  };
  
  export default SelectView;