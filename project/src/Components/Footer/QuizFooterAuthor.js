import React from "react";
import { Link } from "react-router-dom";

/* Adds links that allow the user to navigate between pages*/
const QuizFooterAuthor = () => (
  <footer>
    <nav>
      <ul>
        {/* Here the links are established correctly */}
        <li>
          <Link to="/score">Submit</Link>
        </li>
        <li>
          <Link to="/artist">Back</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default QuizFooterAuthor;