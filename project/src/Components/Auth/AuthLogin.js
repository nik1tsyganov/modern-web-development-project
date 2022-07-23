import React, { useEffect, useState } from "react";
import { loginUser } from "./../../Common/Services/AuthService";
import {useNavigate} from 'react-router-dom';
import AuthForm from "./AuthForm";

const AuthLogin = () => {
  const [existingUser, setExistingUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const navigate = useNavigate();

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (existingUser && add) {
      loginUser(existingUser).then((userCreated) => {
        if (userCreated) {
          alert(`${userCreated.get("firstName")}, you successfully logged in!`);
        }
        setAdd(false);
      });
    }
  }, [existingUser, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target; // destructure properties from js object

    setExistingUser({
      ...existingUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setAdd(true);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div>
      <AuthForm
        user={existingUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
        onClick={onClickHandler}
      />
    </div>
  );
};

export default AuthLogin;
