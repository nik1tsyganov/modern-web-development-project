import React, { useEffect, useState } from "react";
import {
  getFriend
} from "../../Common/Services/FriendService";
import {
  addFriend
} from "../../Common/Services/AddFriend";
import {FriendsList} from "./FriendsForm";
import Parse from 'parse';


const ProfileView = () => {

    const [name, setName] = useState();
    const [highScore, setScore] = useState();
    const [userName, setUserName] = useState();
    const [friends, setFriends] = useState([]);
    const [userResponses, setUserResponses] = useState([]);
    const [add, setAdd] = useState(false);
    const [response, setResponse] = useState();
  
    useEffect(() => {
      /// Turn into a service
      var currentUser = Parse.User.current();
      currentUser.fetch()
      ///
      var username = currentUser.attributes.username;
      var firstName = currentUser.attributes.firstName;
      var lastName = currentUser.attributes.lastName;
      var score = currentUser.attributes.score;
      var friendsArray = currentUser.attributes.friendsList;

      console.log("friendsArray")
      console.log(friendsArray)

      var fullName = firstName + ' ' + lastName;

      setUserName(username)
      setName(fullName)
      setScore(score)

      if (typeof friendsArray !== 'undefined') {
        friendsArray.map((friendUserName) => (
          getFriend(friendUserName).then((result) => {
            setFriends([...friends, result])
            console.log("result")
            console.log(result)
          })  
        ));
    }

      console.log("hehehe")
      console.log(friends)

    }, []);

    useEffect(() => {
      if (response && add) {
        addFriend(response).then((userResponse) => {
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

    console.log("highScore")
    console.log(highScore)
  
    return (
    <div>
        <h1 className="head">Profile</h1>
        <div>
          <p>Name: {name}</p>
          <p>Username: {userName}</p>
          <p>High Score: {highScore}</p>
        </div>
        <br />
        <h2>Friends List</h2>
        <FriendsList friends={friends} onChangeForm={onChangeHandler} onSubmitForm={onClickHandler}/>
    </div>
    );
  };
  
  export default ProfileView;