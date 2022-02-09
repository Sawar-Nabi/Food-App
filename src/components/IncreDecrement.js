import React, { useState } from "react";

const IncreDecrement = ({valueFunc}) => {
  const [ counter, setCounter ] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter == 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '1rem',background: '#afafaf', padding: '0 1rem', borderRadius: '.5rem'}}>
      <button onClick={increment} style={{background: 'transparent', border: 'none'}}>+</button>
      <span>{counter}</span>
      <button onClick={decrement} style={{background: 'transparent', border: 'none'}}>-</button>
    </div>
  );
};

export default IncreDecrement;
