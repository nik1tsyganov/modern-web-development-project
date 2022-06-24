import React from 'react';

function Child({ data, onChildClick }) {
    return (
      <div class="child">
        <button onClick={onChildClick}>{data}</button>
      </div>
    );
  }

  export default Child;