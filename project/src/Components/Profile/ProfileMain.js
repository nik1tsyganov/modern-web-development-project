import React from "react";
import EndFooter from "../Footer/EndFooter";
import ProfileView from "./ProfileView";


const Profile = () => {
  return (
    <div  className="top">

      {/* Component displays profile, name, username, high score */}
      <ProfileView/>
      <br />
      {/* Component allows naviation between pages */}
      <EndFooter />
    </div>
  );
};

export default Profile;