import React, { useEffect, useState } from "react";
import ProtectedRoute from "./../../Common/AppTools/ProtectedRoute";
import Profile from "./ProfileMain";
import Parse from "parse";

const MainProfile = () => {
  const [flag, setFlag] = useState(false);
  var check;

  // tests for existence of parse user
  if (Parse.User.current() == null) {
    check = true;
  } else {
    check = false;
  }

  useEffect(() => {
    if (check === true) {
      console.log("Good")
      setFlag(false);
    } else {
      console.log("Bad")
      setFlag(true);
    }
  }, []);

  // if parse user does not exist, redirects user to login
  // if parse user exists, directs user to home
  return (
    <div>
      <ProtectedRoute
        exact
        desiredPath="/profile"
        redirectedPath="/"
        flag={flag}
        component={Profile}
      />
    </div>
  );
};

export default MainProfile;
