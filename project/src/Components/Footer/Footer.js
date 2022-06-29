import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <nav>
      <ul>
        {/* <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Historical">Historical</a>
        </li> */}
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