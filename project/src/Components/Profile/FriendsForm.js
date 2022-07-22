import React from "react";

/* STATELESS CHILD COMPONENT */
const FriendsList = ({friends, onChangeForm, onSubmitForm }) => {

  return (
    <div>
        <ul>
            {typeof friends !== 'undefined' && (
                friends.map((friend) => (
                <li>
                    <p>{friend.attributes.username}: {friend.attributes.score}</p>
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