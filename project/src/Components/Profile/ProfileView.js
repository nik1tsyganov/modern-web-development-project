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


const ProfileView = () => {

  const [name, setName] = useState();
  const [highScore, setScore] = useState();
  const [userName, setUserName] = useState();
  const [friends, setFriends] = useState([]);
  const [friendArray, setFriendArray] = useState([]);
  const [response, setResponse] = useState();
  const [flag, setFlag] = useState(false);
  const [renderFlag, setRenderFlag] = useState(false);
  const [reRender, setRerenderFlag] = useState(false);

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

        setFriendArray(FriendObjects)
        setFlag(true)
    });

  }, []);

  useEffect(() => {

    if (flag) {

        Promise.all(
            friendArray.map((friend) => {
                let FriendId = pullFriend(friend.attributes.friend.id);

                return FriendId
            })
        ).then((result) => {

            setFriends(result)

            setRenderFlag(true)
        })

    }

  }, [flag, friendArray]);

useEffect(() => {
  
    if (reRender && response) {
        addFriend(response).then((result) => {
            console.log(result)
        });
    }

    setRerenderFlag(false)
    
}, [reRender, response]);

  const onClickHandler = (e) => {
    e.preventDefault();
    setRerenderFlag(true)

  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setResponse(e.target.value);
  };

  console.log("render")

if (renderFlag || reRender){
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
}
};
  
  export default ProfileView;