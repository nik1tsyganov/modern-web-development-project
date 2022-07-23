import React from "react";
import { Link } from "react-router-dom";

/* Adds links that allow the user to navigate between pages*/
const QuizFooterArtist = () => (
  <footer>
    <nav>
      <ul>
        {/* Here the links are established correctly */}
        <li>
          <Link to="/author">Next Category</Link>
        </li>
        <li>
          <Link to="/historical">Back</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default QuizFooterArtist;