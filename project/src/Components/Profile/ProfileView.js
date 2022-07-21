import React, { useEffect, useState } from "react";
import {
  getAllFriends
} from "../../Common/Services/FriendService";
import {FriendsList} from "./FriendsForm";
import Parse from 'parse';


const ProfileView = () => {

    const [name, setName] = useState();
    const [score, setScore] = useState();
    const [userName, setUserName] = useState();
    const [friendsList, setFriends] = useState();
  
    useEffect(() => {
      var currentUser = Parse.User.current();
      var username = currentUser.attributes.username;
      var firstName = currentUser.attributes.firstName;
      var lastName = currentUser.attributes.lastName;
      var highScore = currentUser.attributes.highScore;

      var fullName = firstName + ' ' + lastName;
      console.log("fullName")
      console.log(fullName)

      setUserName(username)
      setName(fullName)
      setScore(highScore)

      getAllFriends().then((friends) => {
        setFriends(friends)
      });

    }, []);
  
    return (
    <div>
        <h1 className="head">Profile</h1>
        <div>
          <p>Name: {name}</p>
          <p>Username: {userName}</p>
          <p>High Score: {score}</p>
        </div>
        <br />
        <h2>Friends List</h2>
        <FriendsList friends={friendsList}/>
    </div>
    );
  };
  
  export default ProfileView;