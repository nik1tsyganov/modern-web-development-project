import React, { useState, useEffect } from 'react';

/* displays header in HTML */
  export function Header({ title, children }) {
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