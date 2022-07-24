import React, { useEffect, useState } from "react";
import {
  getFriend
} from "../../Common/Services/FriendService";
import {
    pullFriend
  } from "../../Common/Services/PullFriendService";
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
  const [friendArray, setFriendArray] = useState([]);
  const [response, setResponse] = useState();
  const [flag, setFlag] = useState(false);
  const [reRender, setRerenderFlag] = useState(false);
  const [promiseFlag, setPromiseFlag] = useState(false);
  const [trigger, setTrigger] = useState(true);
  

  useEffect(() => {
    // current user fetched
    var currentUser = Parse.User.current()
    currentUser.fetch()

    var username = currentUser.attributes.username;
    var firstName = currentUser.attributes.firstName;
    var lastName = currentUser.attributes.lastName;
    var score = currentUser.attributes.score;
    var fullName = firstName + ' ' + lastName;

    setUserName(username)
    setName(fullName)
    setScore(score)

    // trigger set default to true, once new friend is added trigger set to false, will not redisplay except when new friend added
    if (trigger) {
      // service called to get friend objects, objects inserted into stateful array
      getFriend().then((FriendObjects) => {
          setFriendArray(FriendObjects)
          setPromiseFlag(true)
      });

      // Friend objects mapped over, each friend object inputted to service to pull out object
          // id of each friend
      if (promiseFlag) {
        Promise.all(
          friendArray.map((friend) => {
              let FriendId = pullFriend(friend.attributes.friend.id);
              return FriendId
          })
        ).then((result) => {
            setFriends(result)
            setRerenderFlag(true)
        })
      }
    }

    // flag set on click, if click, calls service to create new friend object then recalls code to display new friend
    if (flag) {

      // service called to add new friend object
      addFriend(response).then((result) => {
          
          // service then another service to update display to show new friend
          getFriend().then((FriendObjects) => {
            Promise.all(
              FriendObjects.map((friend) => {
                  let FriendId = pullFriend(friend.attributes.friend.id);
                  return FriendId
              })
            ).then((result) => {
                setFriends(result)
            })
        });
      });
      // reset flag
      setFlag(false)
    }

  }, [response, flag, promiseFlag, trigger]);


// handles click events, flag triggers add friend service
  const onClickHandler = (e) => {
    e.preventDefault();
    setFlag(true)
    setTrigger(false)
  };

  // handles change events
  const onChangeHandler = (e) => {
    e.preventDefault();
    setResponse(e.target.value);
  };

if (reRender){
    return (
        <div>
            <h1 className="profile">Profile</h1>
            <div>
              <p>Name: {name}</p>
              <p>Username: {userName}</p>
              <p>High Score: {highScore}</p>
            </div>
            <br />
            <h1 className="friends-list">Friends List: </h1>
            <FriendsList friends={friends} onChangeForm={onChangeHandler} onSubmitForm={onClickHandler}/>
        </div>
        );
}
};
  
  export default ProfileView;