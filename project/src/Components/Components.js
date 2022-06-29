import React from "react";
import Historical from "./Historical/Historical";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";


const Components = () => {
  return (
    <Router>
      <div>
        {/* <Home /> */}
        <Route path="/" exact component={Home} />
        {/* <Historical /> */}
        <Route path="/Historical" component={Historical} />
      </div>
      <Footer />
    </Router>
  );
};

export default Components;