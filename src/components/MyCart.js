import React, { useContext } from "react";
import { IncreDecre } from "../IncreStore";
import CommonNav from "./CommonNav";
import styled from "styled-components";
import { Constant } from "../constants";
const { Fonts, Colors } = Constant;

const MyCart = ({ decrement, increment }) => {
  const { counter, setCounter } = useContext(IncreDecre);

  const example = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  return (
    <Section>
      <CommonNav title="My Cart" color="#000" />
      {example.map((exam) => (
        <div>
          {counter}
          <button onClick={increment}>Add</button>
          <button onClick={decrement}>Sub</button>
        </div>
      ))}
    </Section>
  );
};

export default MyCart;

const Section = styled.section`
  width: 100%;
  height: auto;
  /* background-color: #334; */
`;
