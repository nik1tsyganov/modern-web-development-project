import React from "react";

/* STATELESS CHILD COMPONENT */
const FriendsList = ({friends, onChangeForm, onSubmitForm }) => {
    console.log("new")
    console.log(friends)
    console.log("done")
  return (
    <div>
        <ul>
            {friends.length > 0 && (
                friends.map((friend) => (
                <li>
                    {console.log(friend)}
                    <p key={friend.id}> {friend.attributes.username}: {friend.attributes.score}</p>
                </li>)))}
        </ul>
        <div>
            <form>
                <input text="addFriend" onChange={onChangeForm} />
                <button type="submit" onClick={onSubmitForm}>
                    Add Friend
                </button>
            </form>
        </div>
    </div>
  );
};

export {FriendsList};