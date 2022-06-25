import React, { useEffect } from 'react';

export function SelectHeader({ title, children }) {
    useEffect(() => {
      document.title = title;
    }, [title]);
  
    return (
      <header>
        <h1>{title}</h1>
            {children}
      </header>
    );
  }

  export default SelectHeader;