import React, { useState } from "react";
import { IncreDecre } from "../IncreStore";
import MyCart from "./MyCart";

const IncreDecrement = () => {
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
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>Incre</button>
      <button onClick={decrement}>Decre</button>
      <IncreDecre.Provider value={{ counter, setCounter }}>
        <MyCart increment={increment} decrement={decrement}/>
      </IncreDecre.Provider>
    </div>
  );
};

export default IncreDecrement;
