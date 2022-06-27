import React from 'react';
import {
    SelectFigure,
  } from "/src/Common/Services/LearnService";

/* displays header in HTML */
  export function SelectFigure({figures}) {

    return (
      <body>
        <div> 
        <form class="form">
        {figures.map(
            (figures) =>
                <input
                  type="radio"
                  key="{figures}"
                  name="historical_figure"
                  value="{figures.name}"
                />)}
        </form>
      </div>
      </body>
    );
  }