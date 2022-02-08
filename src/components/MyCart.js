import React, { useState } from "react";
import CommonNav from "./CommonNav";
import styled from "styled-components";
import { Constant } from "../constants";
import IncreDecrement from "./IncreDecrement";
const { Fonts, Colors } = Constant;

const MyCart = () => {
  const [ itemValue, setItemValue ] = useState(0);

  const getItemValue = (value) => {
    setItemValue(value);
  };

  const example = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  return (
    <Section>
      <CommonNav title="My Cart" color="#000" />
      {example.map((exam) => (
        <div>
          <div>{itemValue}</div>
          15$
          <IncreDecrement itemFunc={getItemValue} />
          {console.log(itemValue)}
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
