import React from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";

// Protected route allows for routing to be restricted to authorized users
const ProtectedRoute = ({ component: Component, flag, ...rest }) => {
  let navigate = useNavigate();
  let location = useLocation();
  const routeChange = () => {
    let back = rest.redirectedPath;
    navigate(back);
  };
  
  // tests flag set by user login
  return flag ? (
    <Navigate to={rest.desiredPath} state={{ from: location }} replace /> // navigates to desired path on true flag, directs user to login page if false
  ) : (
  <div>
    <p>Unauthorized!</p> 
    <button onClick={routeChange}>Go login</button>
  </div>
  )
};

export default ProtectedRoute;
