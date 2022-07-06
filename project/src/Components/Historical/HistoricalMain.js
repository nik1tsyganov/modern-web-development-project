import React, { useEffect, useState } from "react";
import ProtectedRoute from "./../../Common/AppTools/ProtectedRoute";
import Historical from "./Historical";
import Parse from "parse";

const MainHistroical = () => {
  const [flag, setFlag] = useState(false);
  var check;

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

  // In this case the flag is acquired through a check box but it could also be received from other methods
  // What is a Parse.User method that would help here?

  console.log(check);

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
