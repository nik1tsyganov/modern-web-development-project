import React from "react";

/* STATELESS CHILD COMPONENT */
const FriendsList = ({friends, onChangeForm, onSubmitForm }) => {

  return (
    <div>
        <ul>
            {friends.length > 0 && (
                friends.map((friend) => (
                <li>

                    <p key={friend.id}> {friend.attributes.username}: {friend.attributes.score}</p>
                </li>)))}
        </ul>
        <div>
            <form>
                <input text="addFriend" onChange={onChangeForm} />
                <button type="submit" onClick={onSubmitForm}>
                    Add Friend
                </button>
                <h4>Does not rerender on button click, refresh page</h4>
            </form>
        </div>
    </div>
  );
};

export {FriendsList};