import React, { useState } from "react";
import styled from "styled-components";
import { GiCheckMark } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
import ColaIcon from "../../media/cola.jpg";
import FrenchFriesIcon from "../../media/french.jpg";
import { Constant } from "../../constants";

const { Colors, Flex, CardListStyle } = Constant;

const FullMeal = () => {
  const example = [0, 1, 2, 3];
  const [checkIcon, setCheckIcon] = useState([]);

  const toggleIconCheck = (e) => {
    setCheckIcon();
    console.log(e.target.id);
  };

  return (
    <Section>
      <p>sides</p>
      <div className="sidesCardsDiv">
        {example.map((ex, i) => (
          <div className="cardIcon"  key={i} >
            <input
              type="checkbox"
              name={i}
              id={i}
              value={checkIcon}
              onChange={toggleIconCheck}
            />
            <label htmlFor={i}>
              {/* <img src={FrenchFriesIcon} alt="" /> */}
            </label>
            {checkIcon == i ? (
              <div>
                <GiCheckMark />
              </div> 
            ): null}
          </div>
        ))}
      </div>
      <p>beverages</p>
      <div className="beverageDiv">
        {example.map((ex, i) => (
          <div className="cardIcon">
            <label htmlFor={i}>
              <img src={ColaIcon} alt="" />
            </label>
            <div>
              <AiOutlinePlus />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FullMeal;
const Section = styled.section`
  padding: 0 1rem;
  p {
    font-size: 1.2rem;
    font-weight: 500;
  }
  .sidesCardsDiv,
  .beverageDiv {
    ${Flex};
    justify-content: space-around;
    padding: 1.5rem 0;
    .cardIcon {
      ${CardListStyle};
      position: relative;
      width: 10rem;
      height: 10rem;
      label {
        position: absolute;
        width: inherit;
          height: inherit;
          border-radius: inherit;
          top: 0;
          left: 0;
        img {
          width: inherit;
          height: inherit;
          object-fit: cover;
          border-radius: inherit;
          position: absolute;
          top: 0;
          left: 0;
        }
      }

      div {
        position: absolute;
        bottom: 0rem;
        right: 0rem;
        background-color: ${Colors.secondaryColor};
        padding: 1rem 0.5rem 0.2rem 1rem;
        border-radius: 100% 0 1rem 0;
        color: #fff;
      }
    }
  }
  @media (max-width: 1024px) {
    p {
      font-size: 1.1rem;
    }
    .sidesCardsDiv,
    .beverageDiv {
      justify-content: space-around;
      padding: 1.3rem 0;
      .cardIcon {
        width: 8rem;
        height: 8rem;

        div {
          padding: 1rem 0.5rem 0.2rem 1rem;
          border-radius: 100% 0 1rem 0;
        }
      }
    }
  }
`;
