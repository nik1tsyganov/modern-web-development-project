import React, { useEffect, useState } from "react";
import ProtectedRoute from "./../../Common/AppTools/ProtectedRoute";
import AuthLogin from "./AuthLogin";
import Parse from "parse";

const MainAuth = () => {
  const [flag, setFlag] = useState(false);
  var check;

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

  return (
    <div>
      <ProtectedRoute
        exact
        desiredPath="/"
        redirectedPath="/login"
        flag={flag}
        component={AuthLogin}
      />
    </div>
  );
};

export default MainAuth;
