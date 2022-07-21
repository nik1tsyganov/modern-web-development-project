import React from "react";

/* STATELESS CHILD COMPONENT */
const FriendsList = (friends) => {
  return (
    <div>
        <ul>
            {friends.length > 0 && (
                friends.map((friends) => (
                <li>
                    <p>{friends.attributes.username}: {friends.attributes.highScore}</p>
                </li>)))}
        </ul>
    </div>
  );
};

export {FriendsList};