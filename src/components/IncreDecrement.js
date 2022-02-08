import React, { useState } from "react";

const IncreDecrement = ({ itemFunc }) => {
  const [ counter, setCounter ] = useState(0);

  const increment = () => {
    itemFunc(counter);
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter == 0) {
      setCounter(0);
      itemFunc(counter);
    } else {
      itemFunc(counter);
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>Incre</button>
      <button onClick={decrement}>Decre</button>
    </div>
  );
};

export default IncreDecrement;
