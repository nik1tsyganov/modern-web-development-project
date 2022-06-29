import React from "react";
import Historical from "./Historical/Historical";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Components = () => {
  return (
    // This is where routing occurs and allows the user to go
    // main page to the historical page
    <Router>
      <div>
        <Routes>
          {/* <Home /> */}
          <Route path="/" exact element={<Home/>} />
          {/* <Historical /> */}
          <Route path="/Historical" element={<Historical/>} />
        </Routes>
      </div>
      {/* A footer is required for the links to various components to work */}
      <Footer />
    </Router>
  );
};

export default Components;