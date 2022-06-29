import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="/Historical">Historical</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;