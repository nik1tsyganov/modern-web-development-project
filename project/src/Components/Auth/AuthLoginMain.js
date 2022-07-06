import React, { useEffect, useState } from "react";
import ProtectedRouteAlt from "./../../Common/AppTools/ProtectedRouteAlt";
import AuthLogin from "./AuthLogin";
import Parse from "parse";

const MainAuth = () => {
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
      setFlag(true);
    } else {
      console.log("Bad")
      setFlag(false);
    }
  }, []);

  // if parse user does not exist, redirects user to login
  // if parse user exists, directs user to home
  return (
    <div>
      <ProtectedRouteAlt
        exact
        desiredPath="/login"
        redirectedPath="/"
        flag={flag}
        component={AuthLogin}
      />
    </div>
  );
};

export default MainAuth;
