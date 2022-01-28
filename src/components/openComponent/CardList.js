import React from "react";
import styled from "styled-components";
import { Constant } from "../../constants";
import listImage from "../../media/listContent.jpg";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const { Fonts, Colors, Flex, CardListStyle } = Constant;

const CardList = () => {
  return (
    <Section>
      <div className="card_list">
        <div className="card_list_icon">
          <img src={listImage} alt="" />
        </div>
        <div className="card_list_content">
          <h1>chicken burger</h1>
          <p>snadwich features two savory flame-grilled beef patties</p>
          <div className="card_Price_Tag">
            <h3>$ 15.00</h3>
            <button>
              <AiOutlineMinusCircle className="add_Icon" />
            </button>
            <span>2</span>
            <button>
              <AiFillPlusCircle className="add_Icon" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CardList;
const Section = styled.div`
  .card_list {
    ${CardListStyle}

    .card_list_icon {
      height: 15rem;
      width: 20rem;
      img {
        height: inherit;
        width: inherit;
        border-radius: 1rem;
        object-fit: cover;
      }
    }
    .card_list_content {
      width: 20rem;
      padding: 1rem 0.2rem;
      text-transform: capitalize;
      h1 {
        color: ${Colors.helperColor};
        font-size: 1.3rem;
      }
      p {
        margin: 0.7rem 0;
        color: ${Colors.terteryColor2};
        font-size: 0.9rem;
      }
      .card_Price_Tag {
        ${Flex};
        justify-content: space-between;
        gap: 1rem;
        color: ${Colors.secondaryColor};
        h3 {
          flex: 3;
          font-size: 1.3rem;
        }
        button {
          font-size: 1.7rem;
          align-self: baseline;
          align-self: center;
          justify-self: center;
          border: none;
          background-color: transparent;
          ${Flex}
          cursor: pointer;
          &:last-of-type {
            color: ${Colors.secondaryColor};
          
          }
          &:first-of-type {
            color: ${Colors.terteryColor};
          }
        }
        span {
          color: ${Colors.helperColor};
          font-size: 1.5rem;
        }
      }
    }
  }
`;
