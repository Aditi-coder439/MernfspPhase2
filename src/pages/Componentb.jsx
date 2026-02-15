import React from 'react';
import ComponentC from './ComponentC';

function Componentb() { 
  return (
    <div style={{ border: "2px solid blue", padding: "20px", marginTop: "10px"}}>
      <h2>Component B</h2>
      {/* ComponentB is just a container now */}
      <ComponentC />
    </div>
  );
}

export default Componentb;