import React, { useState } from "react";
import CommonNav from "./CommonNav";
import styled from "styled-components";
import { IoNotificationsOutline } from "react-icons/io5";
import IncreDecrement from "./IncreDecrement";
import { Constant } from "../constants";
import CheckoutCart from "./CheckoutCart";
const { Fonts, Colors } = Constant;

const MyCart = () => {
  const [itemValue, setItemValue] = useState(0);

  const getItemValue = (e) => {
    setItemValue(e)
  };

  const example = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Section>
      <CommonNav title="My Cart" color="#000" icon={<IoNotificationsOutline />} fucn={()=> console.log('My Cart ')}/>
      {/* {example.map((exam, i) => (
        <div key={i}>
          <div>15</div>
          <h1>{itemValue}</h1>
          <IncreDecrement valueFunc={getItemValue}/>
        </div>
      ))} */}
      <CheckoutCart/>
    </Section>
  );
};

export default MyCart;

const Section = styled.section`
  width: 100%;
  height: auto;
  background-color: #fff;
`;
