import React, { useState, createContext } from 'react';
import Componentb from './Componentb';

// 1. Create and export the context so others can use it
export const UserContext = createContext();

function ComponentA() {
  const [userName, setUserName] = useState("Muki");
  const [roll] = useState(101); // Included roll here as well

  // The value we want to share globally
  const contextValue = { userName, setUserName, roll };

  return (
    <div style={{ border: "2px solid #000", padding: "20px" }}>
      <h1>Component A</h1>
      <p>State in A: {userName}</p>

      {/* 2. Wrap children in the Provider. Notice NO PROPS on Componentb */}
      <UserContext.Provider value={contextValue}>
        <Componentb />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;