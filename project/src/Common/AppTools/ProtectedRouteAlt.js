import React from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import EndFooter from "../../Components/Footer/EndFooter";

// Protected route prevents user from being taken to login page while logged in
const ProtectedRouteAlt = ({ component: Component, flag, ...rest }) => {
  let navigate = useNavigate();
  let location = useLocation();
  const routeChange = () => {
    let back = rest.redirectedPath;
    navigate(back);
  };
  
  // tests flag set by user login
  return flag ? (
    <Navigate to={rest.desiredPath} state={{ from: location }} replace /> // navigates to desired path (/login) on true flag, directs user to home page if false
  ) : (
  <div>
    <p>Already Logged in!</p> 
    {/* <button onClick={routeChange}>Go home</button> */}
    <EndFooter/>
  </div>
  )
};

export default ProtectedRouteAlt;