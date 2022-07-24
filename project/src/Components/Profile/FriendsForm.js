import React from "react";

/* STATELESS CHILD COMPONENT */
const FriendsList = ({friends, onChangeForm, onSubmitForm }) => {

  return (
    <div>
        <ul>
            {friends.length > 0 && (
                friends.map((friend) => (
                <li>

                    <p key={friend.id}> {friend.attributes.username} -- High Score: {friend.attributes.score}</p>
                </li>)))}
        </ul>
        <div>
            <form>
                <input text="addFriend" placeholder="username@domain" onChange={onChangeForm} />
                <button type="submit" onClick={onSubmitForm}>
                    Add Friend
                </button>
            </form>
        </div>
    </div>
  );
};

export {FriendsList};