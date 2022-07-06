import React from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ component: Component, flag, ...rest }) => {
  let navigate = useNavigate();
  let location = useLocation();
  const routeChange = () => {
    let back = rest.redirectedPath;
    navigate(back);
  };
  
  return flag ? (
    <Navigate to={rest.desiredPath} state={{ from: location }} replace />
  ) : (
  <div>
    <p>Unauthorized!</p> 
    <button onClick={routeChange}>Go login</button>
  </div>
  )
};

export default ProtectedRoute;
