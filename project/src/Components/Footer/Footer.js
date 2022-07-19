import React from "react";
import { Link } from "react-router-dom";

/* Adds links that allow the user to navigate between pages*/
const Footer = () => (
  <footer>
    <nav>
      <ul>
        {/* Below is an example of how we are not supposed to do the links */}
        {/* <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Historical">Historical</a>
        </li> */}

        {/* Here the links are established correctly */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/historical-auth">Quiz</Link>
        </li>
        <li>
          <Link to="/login-auth">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        {/* Add link to profile */}
      </ul>
    </nav>
  </footer>
);

export default Footer;