import React, { useEffect, useState } from "react";
import {
  getFriend
} from "../../Common/Services/FriendService";
import {
  addFriend
} from "../../Common/Services/AddFriend";
import {FriendsList} from "./FriendsForm";
import Parse from 'parse';


const ProfileViewAlt = () => {

//   const [name, setName] = useState();
//   const [highScore, setScore] = useState();
//   const [userName, setUserName] = useState();
//   const [friends, setFriends] = useState([]);
//   const [friendArray, setFriendArray] = useState();
//   // const [userResponses, setUserResponses] = useState([]);
//   const [add, setAdd] = useState(false);
//   const [response, setResponse] = useState();

//   useEffect(() => {
//     /// Turn into a service
//     var currentUser = Parse.User.current();
//     currentUser.fetch()
//     ///
//     var username = currentUser.attributes.username;
//     var firstName = currentUser.attributes.firstName;
//     var lastName = currentUser.attributes.lastName;
//     var score = currentUser.attributes.score;
//     var friendsArray = currentUser.attributes.friendsList;

//     var fullName = firstName + ' ' + lastName;

//     setUserName(username)
//     setName(fullName)
//     setScore(score)

//     // friendsArray.map((friend) => (
//     //   console.log(friend)
//     // ))

//     // friendsArray.map((friend) => (
//     //   setFriendNames(friendNames => [...friendNames, friend])
//     // ))

//     // console.log(friends)
//     setFriends([])
//     friendsArray.map((friendUserName) => (
//       getFriend(friendUserName).then((result) => {
//         friends.push(result)
//         setFriends(friends)
//       })  
//     ));

//     console.log("friendsC")
//     console.log(friends)

//   }, []);

//   // useEffect(() => {

//   //   if (response && add) {
//   //     addFriend(response).then((userResponse) => {
//   //       setAdd(false);
//   //       console.log(userResponse)
//   //     });
//   //   }
//   // }, [response, add]);

//   const onClickHandler = (e, friendsArray) => {
//     e.preventDefault();
//     //setAdd(true);

//     if (response) {
//     addFriend(response).then((userResponse) => {
//       setAdd(false);
//       console.log(userResponse)
//     });
//   }

//   friends.map((friend) => friend.get("username")
//   )

//     if (typeof friendsArray !== 'undefined') {
//       setFriends([])
//       friendsArray.map((friendUserName) => (
//         getFriend(friendUserName).then((result) => {
//           console.log(result)
//           setFriends([...friends, result])
//           console.log(friends)
//         })  
//       ));
//   }

//   };

//   const onChangeHandler = (e) => {
//     e.preventDefault();
//     console.log("e.target.value");
//     console.log(e.target.value);
//     setResponse(e.target.value);
//   };

//   console.log("friendsB")
//   console.log(friends)

//   return (
//   <div>
//       <h1 className="head">Profile</h1>
//       <div>
//         <p>Name: {name}</p>
//         <p>Username: {userName}</p>
//         <p>High Score: {highScore}</p>
//       </div>
//       <br />
//       <h2>Friends List: </h2>
//       <FriendsList friends={friends} onChangeForm={onChangeHandler} onSubmitForm={onClickHandler}/>
//   </div>
//   );
// };
  
  export default ProfileViewAlt;