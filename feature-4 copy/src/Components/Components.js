import { getUsers, getSelect } from "./Main/Historical.js";
import Header from "./Main/Header.js";
import Parent from "./Main/Parent.js";
import SelectHeader from "./Main/SelectHeader.js";
import React, { useState, useEffect } from 'react';
import './App.css';



const Components = () => {
    const [users, setUsers] = useState([]);
    const [ratings, setRatings] = useState([]);
  
    // the useEffect hook is used here to load user data asynchronously
    useEffect(() => {
      console.log("render");
      getSelect().then((data) => {
        setRatings(data);
      });
    }, []);

    useEffect(() => {
      console.log("render");
      getAllfigures().then((figure) => {
        console.log(figure);
        setUsers(figure);
      });
    }, []);
  
    return (
      <div className="App">
        <Header>
        <h1 class="head">Pick the historical figure</h1>
      </Header>
  
      <div>
        <img src={"../public/images/Agamemnon.jpg"} alt="Agamemnon" width="275" height="300" />
      </div>
      <br />
      <selectFigure></selectFigure>
      <div>
        <p>Write in your own:</p>
        <form class="write-in">
          <input type="text" name="historical_figure" />
        </form>
        <Parent class="button" />
      </div>
      <br />
      <SelectHeader>
      <p>How do you like this website?</p>
      </SelectHeader>
      <div>  
      <form>
        <select class="rating">
              {ratings.map(
                (rating) =>
                  <option value="{rating.name}">{rating.name}</option>
              )}
        </select>
      </form>
      <Parent class="button" />
      </div>
      </div>
    );
};

export default Components;