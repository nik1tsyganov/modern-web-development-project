import React, { useEffect, useState } from "react";
import ProtectedRoute from "./../../Common/AppTools/ProtectedRoute";
import Historical from "./Historical";
import Parse from "parse";

const MainHistroical = () => {
  const [flag, setFlag] = useState(false);
  var check;

    // tests for existence of parse user
  if (Parse.User.current() == null) {
    check = false;
  } else {
    check = Parse.User.current().authenticated();
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

  console.log(check);

  // if parse user does not exist, redirects user to login
  // if parse user exists, directs user to historical
  return (
    <div>
      <ProtectedRoute
        exact
        desiredPath="/historical"
        redirectedPath="/login"
        flag={flag}
        component={Historical}
      />
    </div>
  );
};

export default MainHistroical;
