import {saveNewPlayer, retrievePlayer} from "./Person.js"
import Header from "./Header/Header.js";
import Parent from "./Parent/Parent.js";
import React, { useState, useEffect } from 'react';
import * as Env from "./environment";
import Parse from "parse";
import './App.css';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {

  var users;
  saveNewPlayer();

  // the useEffect hook is used here to load user data asynchronously
  useEffect(() => {
    console.log("render");
    users = retrievePlayer();
  }, []);

  return (
    <div className="App">
      <Header>
      <h1 className="head">Pick the historical figure</h1>
    </Header>

    <div>
      <img src={"../public/images/Agamemnon.jpg"} alt="Agamemnon" width="275" height="300" />
    </div>
    <br />
    <div> 
      <form className="form">
              <input
                type="radio"
                key="{users.playerName}"
                name="historical_figure"
                value="{users.playerName}"
              />
      </form>
    </div>
    <div>
      <p>Write in your own:</p>
      <form className="write-in">
        <input type="text" name="historical_figure" />
      </form>
      <Parent className="button" />
    </div>
    </div>
  );
}

export default App;
