import React, { useEffect, useState } from "react";
import {
  getAllHistoricals
} from "/Users/NikitaMac/Desktop/Modern Web Development/Homework/modern-web-development-project/project/src/Common/Services/SelectService";
import {createUserResponse} from "/Users/NikitaMac/Desktop/Modern Web Development/Homework/modern-web-development-project/project/src/Common/Services/CreateService";
import {TextForm, SelectRadioForm} from "./SelectForm";
import Image from "../../Images/Agamemnon.jpg";


const SelectView = () => {

    const [historicals, setHistoricals] = useState([]);
    const [userResponses, setUserResponses] = useState([]);
    const [name, setName] = useState();
  
    useEffect(() => {
      getAllHistoricals().then((historicals) => {
        console.log(historicals);
        setHistoricals(historicals);
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
      console.log(e.target.value);
      setName(e.target.value);
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

