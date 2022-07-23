import React, { useEffect, useState } from "react";
import {
  getAllNames
} from "../../Common/Services/SelectService";
import {createUserResponse} from "../../Common/Services/CreateService";
import {TextForm, SelectRadioForm} from "./SelectForm";
import Image from "../../Images/Agamemnon.jpg";


const SelectView = (className) => {

    className = className.className.className

    const [historicals, setHistoricals] = useState([]);
    const [userResponses, setUserResponses] = useState([]);
    const [response, setResponse] = useState();
  
    useEffect(() => {
      getAllNames(className).then((historicals) => {
        console.log(historicals);
        setHistoricals(historicals);
      });
    }, []);
  
    const [add, setAdd] = useState(false);
  

    useEffect(() => {
      if (response && add) {
        createUserResponse(response, className).then((userResponse) => {
          setAdd(false);
          setUserResponses([...userResponses, userResponse]);
        });
      }
    }, [response, userResponses, add]);
  
    const onClickHandler = (e) => {
      e.preventDefault();
      setAdd(true);
    };

    const onChangeHandler = (e) => {
      e.preventDefault();
      console.log(e.target.value);
      setResponse(e.target.value);
    };
  
    return (
    <div>
        <h1 className="head">Pick the historical figure</h1>
        <div>
            <img src={Image} alt="Agamemnon" width="275" height="300" />
        </div>
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