import React, { useEffect } from 'react';

function Header({ title, children }) {
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

  export default Header;
  