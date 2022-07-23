import React, { useEffect, useState } from "react";
import {
  getAllNames
} from "../../Common/Services/SelectService";
import {createUserResponse} from "../../Common/Services/CreateService";
import {TextForm, SelectRadioForm} from "./SelectArtistForm";
import Image from "../../Images/vangogh.jpg";


const SelectArtistView = (className) => {

  className = className.className.className

    const [artists, setArtists] = useState([]);
    const [userResponses, setUserResponses] = useState([]);
    const [response, setResponse] = useState();
  
    useEffect(() => {
      getAllNames("artists").then((artists) => {
        console.log(artists);
        setArtists(artists);
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
        <h1 className="head">Pick the artist</h1>
        <div>
            <img src={Image} alt="vangogh" width="275" height="300" />
        </div>
        <div>
            <SelectRadioForm artists={artists} onSubmitForm={onClickHandler} onChangeForm={onChangeHandler} />
        </div>
        <p>Write in your own:</p>
            <TextForm onSubmitForm={onClickHandler} onChangeForm={onChangeHandler} />
        <br />
    </div>
    );
  };
  
  export default SelectArtistView;