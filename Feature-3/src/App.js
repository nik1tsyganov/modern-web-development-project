import { getUsers, getSelect } from "./Historical/Historical.js";
import Header from "./Header/Header.js";
import Parent from "./Parent/Parent.js";
import SelectHeader from "./Header/SelectHeader.js";
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  const [ratings, setRatings] = useState([]);

  // the useEffect hook is used here to load user data asynchronously
  useEffect(() => {
    console.log("render");
    getUsers().then((data) => {
      setUsers(data);
    });
    getSelect().then((data) => {
      setRatings(data);
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
    <div> 
      <form class="form">
      {users.map(
          (user) =>
              <input
                type="radio"
                key="{user}"
                name="historical_figure"
                value="{user.name}"
              />)}
      </form>
    </div>
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
}

export default App;
