import React, { useContext } from 'react';
import { UserContext } from './ComponentA'; // Import the specific context

function ComponentC() {
  // 3. Access the data directly using the hook
  const { userName, roll, setUserName } = useContext(UserContext);

  return (
    <div style={{ border: "2px solid green", padding: "20px", marginTop: "10px"}}>
      <h2>Component C</h2>
      <p>User from Context: <strong>{userName}</strong></p>
      <p>Roll from Context: <strong>{roll}</strong></p>
      
      {/* You can even change the state in ComponentA from here! */}
      <button onClick={() => setUserName("Amit")}>
        Change Name to Amit
      </button>
    </div>
  );
}

export default ComponentC;