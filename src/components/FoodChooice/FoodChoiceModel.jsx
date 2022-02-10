import React from "react";
import styled from "styled-components";
import { Constant } from "../../constants";
import { FaTimes } from "react-icons/fa";
import image from "../../media/listContent.jpg";

const { Fonts, Colors, Flex, CardListStyle } = Constant;

const FoodChoiceModel = ({ close }) => {
  const testapi = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Section>
      <div className="model">
        <div className="model_header">
          <button onClick={close}>
            <FaTimes />
          </button>
          <div className="Title">
            <h2>add speacial instructions</h2>
          </div>
        </div>
        <div className="extraWrapper">
          {testapi.map((test, i) => (
            <div className="extraContentCard" key={i}>
              <img src={image} alt={test} />
              <div className="extraContent">
                <div className="ContentName">
                  <h3>extra tomatoes</h3>
                  <p>price per item</p>
                </div>
                <div className="contentprice">$3.00</div>
              </div>
            </div>
          ))}
        </div>
        <div className="amount_wrapper">
                <div className="amount_div">
                    <p>amount item</p> <p>9</p>
                </div>
                <div className="price_div">
                    <p>total price</p><p>$65.5</p>
                </div>
        </div>
      </div>
    </Section>
  );
};

export default FoodChoiceModel;
const Section = styled.section`
  height: 90vh;
  width: 100vw;
  background-color: rgba(51, 51, 51, 0.473);
  position: fixed;
  top: 0;
  left: 0;
  font-family: ${Fonts.primaryFont};
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  padding: 0rem 5rem;
  .model {
    width: 100%;
    padding: 1rem 0;
    background: #fff;
    border-radius: 2rem 2rem 0 0;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0px;
    }
    .model_header {
      ${Flex};
      border-bottom: 2px solid ${Colors.terteryColor2};
      padding: 1rem;

      button {
        padding: 0.2em;
        font-size: 1.5rem;
        background: none;
        border: none;
        font-weight: 100;
        color: ${Colors.terteryColor};
      }
      .Title {
        flex: 1;
        padding: 0rem 0;
        h2 {
          text-align: center;
        }
      }
    }
    .extraWrapper {
      padding: 1rem 1rem;
      .extraContentCard {
        ${Flex};
        gap: 1rem;
        ${CardListStyle};

        img {
          width: 10rem;
          border-radius:inherit;
        }
        .extraContent {
          width: calc(100% - 10rem);
          justify-content: space-between;
          ${Flex};
          /* background: red; */
          padding: 1rem 0;

        }
      }
    }
  }
`;
