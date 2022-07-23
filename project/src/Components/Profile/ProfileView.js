import React, { useEffect, useState } from "react";
import {
  getFriend
} from "../../Common/Services/FriendService";
import {
    pullFriend
  } from "../../Common/Services/PullFriendService";
  import {
    getFriendId
  } from "../../Common/Services/FriendIdService";
import {
  addFriend
} from "../../Common/Services/AddFriend";
import {FriendsList} from "./FriendsForm";
import Parse from 'parse';


const ProfileView = async () => {

  const [name, setName] = useState();
  const [highScore, setScore] = useState();
  const [userName, setUserName] = useState();
  const [friends, setFriends] = useState([]);
  const [friendArray, setFriendArray] = useState([]);
  const [response, setResponse] = useState();

  useEffect(() => {
    /// Turn into a service
    var currentUser = Parse.User.current()
    currentUser.fetch()
    ///
    var username = currentUser.attributes.username;
    var firstName = currentUser.attributes.firstName;
    var lastName = currentUser.attributes.lastName;
    var score = currentUser.attributes.score;
    var fullName = firstName + ' ' + lastName;

    setUserName(username)
    setName(fullName)
    setScore(score)

    getFriend().then((FriendObjects) => {
        console.log("FriendObjects")
        console.log(FriendObjects)
        FriendObjects.map((friend) => {
            await pullFriend(friend.attributes.friend.id).then((result) => {
                setFriends([...friends, result])
            })
        })
        console.log("friends")
        console.log(friends)

    });

  }, []);


  const onClickHandler = (e) => {
    e.preventDefault();

    if (response) {
        getFriendId(response).then((Id) => {
            addFriend(Id).then((result) => {
                console.log(result)
                });
        })
    }
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setResponse(e.target.value);
  };

  return (
  <div>
      <h1 className="head">Profile</h1>
      <div>
        <p>Name: {name}</p>
        <p>Username: {userName}</p>
        <p>High Score: {highScore}</p>
      </div>
      <br />
      <h2>Friends List: </h2>
      <FriendsList friends={friends} onChangeForm={onChangeHandler} onSubmitForm={onClickHandler}/>
  </div>
  );
};
  
  export default ProfileView;