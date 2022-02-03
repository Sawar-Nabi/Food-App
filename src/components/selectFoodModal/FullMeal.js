import React from 'react';
import styled from 'styled-components';
import {GiCheckMark} from "react-icons/gi"
import {AiOutlinePlus} from "react-icons/ai"
import ColaIcon from "../../media/cola.jpg"
import {Constant, } from "../../constants"

const{Fonts,
  Colors,
  Flex,
  CardListStyle,
  Grid,
  device,} = Constant;

const FullMeal = () => {
    const example = [0,1,2,3]
  return <Section>
  <p>sides</p>
  <div className="sidesCardsDiv">
  {example.map((ex, i) =>
    <div className="cardIcon">
          <img src={ColaIcon} alt="" />
          <div><GiCheckMark/></div>
      </div>
  )}
      
  </div>
  <p>beverages</p>
  <div className="beverageDiv">
  
  {example.map((ex, i) =>
    <div className="cardIcon">
          <img src={ColaIcon} alt="" />
          <div><AiOutlinePlus/></div>
      </div>
  )}
  </div>
  </Section>
};

export default FullMeal;
const Section = styled.section`
padding: 0 1rem;
p{
  font-size: 1.2rem;
  font-weight: 500;
}
.sidesCardsDiv, .beverageDiv{
  ${Flex};
  justify-content: space-around;
  padding: 1rem 0;
  .cardIcon{
    ${CardListStyle};
    padding: .5rem;
    position: relative;
    width: 12rem;
    height: 12rem;
    img{
      width:inherit;
      height: inherit;
      object-fit: cover;
      border-radius: inherit;

    }
    div{
      position: absolute;
      bottom: 0rem;
      right: 0rem;
      background-color: ${Colors.secondaryColor};
      padding: 1rem .5rem .2rem 1rem;
      border-radius: 100% 0 1rem 0;
      color: #fff;
    }
  }
}
`