import React, { useEffect, useState } from "react";
import {
  getAllNames
} from "../../Common/Services/SelectService";
import {createUserResponse} from "../../Common/Services/CreateService";
import {TextForm, SelectRadioForm} from "./SelectAuthorForm";
import Image from "../../Images/HunterSThompson.jpg";


const SelectAuthorView = (className) => {

  className = className.className.className

    const [Authors, setHistoricals] = useState([]);
    const [userResponses, setUserResponses] = useState([]);
    const [response, setResponse] = useState();
  
    useEffect(() => {
      getAllNames("authors").then((Authors) => {
        console.log(Authors);
        setHistoricals(Authors);
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
        <h1 className="head">Pick the author</h1>
        <div>
            <img src={Image} alt="HunterSThompson" width="275" height="300" />
        </div>
        <div>
            <SelectRadioForm Authors={Authors} onSubmitForm={onClickHandler} onChangeForm={onChangeHandler} />
        </div>
        <p>Write in your own:</p>
            <TextForm onSubmitForm={onClickHandler} onChangeForm={onChangeHandler} />
        <br />
    </div>
    );
  };
  
  export default SelectAuthorView;