import React from "react";
import Home from "./Home/Home";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import Historical from "./Historical/Historical";
import MainHistroical from "./Historical/HistoricalMain";
import MainAuth from "./Auth/AuthLoginMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Footer allows user to navigate between pages, navigation
  done using routes for routing between links */
const Components = () => {
  return (
    // This is where routing occurs and allows the user to go
    // main page to the historical page
    <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/historical-auth" exact element={<MainHistroical/>} />
          <Route path="/login-auth" exact element={<MainAuth/>} />
          <Route path="/register" exact element={<AuthRegister />} />
          <Route path="/login" exact element={<AuthLogin />} />
          <Route path="/historical" exact element={<Historical />} />
        </Routes>
      {/* A footer is required for the links to various components to work */}
    </Router>
  );
};

export default Components;