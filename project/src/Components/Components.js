import React from "react";
import Historical from "./Historical/Historical";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Footer allows user to navigate between pages, navigation
  done using routes for routing between links */
const Components = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Home /> */}
          <Route path="/" exact element={<Home/>} />
          {/* <Historical /> */}
          <Route path="/Historical" element={<Historical/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default Components;