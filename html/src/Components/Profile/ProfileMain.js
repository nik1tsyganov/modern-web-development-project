import React from "react";
import EndFooter from "../Footer/EndFooter";
import ProfileView from "./ProfileView";


/* Historical component displays select and rate modules*/
const Profile = () => {
  return (
    <div>
      {/* This takes in the Parent + Child components and in this case there are two of them */}

      {/* This component allows the user to pick which historical figure it is on the photo or write their own answer */}
      <ProfileView/>
      <br />
      {/* THis component allows the user to rate the website and sends data to back4app database */}
      <EndFooter />
    </div>
  );
};

export default Profile;