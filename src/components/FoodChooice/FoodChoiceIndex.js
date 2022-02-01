import React from "react";
import styled from "styled-components";
import { Constant } from "../../constants";
import choiceBannerImg from "../../media/choiceBanner.jpg";
import {
  AiFillStar,
  AiOutlineClockCircle,
  AiFillDollarCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";

const { Fonts, Colors, Flex, CardListStyle } = Constant;

const FoodChoiceIndex = () => {
  return (
    <Section>
      <div className="choice_Banner">
        <img src={choiceBannerImg} alt="" />
      </div>
      <div className="choice_Content">
        <div className="head">
          <div className="recipe_name">
            <h1>chicken burger</h1> <h1>$15.00</h1>
          </div>
          <div className="recipe_rating">
            <div className="star">
              <AiFillStar className="starIcon" /> 4.9(150)
            </div>

            <div className="recipie_time">
              <AiOutlineClockCircle className="recipie_time_icon" /> 30 min
            </div>
            <div className="recipie_delivery">
              <AiFillDollarCircle className="recipie_delivery_icon" /> free
              delivery
            </div>
          </div>
          <div className="ingredients_tabs_div">
            <ul>
              <li>details</li>
              <li className="active">ingradients</li>
              <li>review</li>
            </ul>
          </div>
          <div className="top_Choice">
            <div className="topChoiceHead">
              <span>choice of top burger</span> 
               <span>required</span>
            </div>
            <div className="choiceOptions">
              <input type="radio" name="choice" id="choice1" />
              <label htmlFor="choice1">extra savory sauce</label>
            </div>
            <div className="choiceOptions">
              <input type="radio" name="choice" id="choice2" />
              <label htmlFor="choice2">extra cheese</label>
            </div>
            <div className="choiceOptions">
              <input type="radio" name="choice" id="choice3" />
              <label htmlFor="choice3">extra tomatos</label>
            </div>
          </div>
          <div className="Special_instructions">
            < AiOutlinePlusCircle/><span>add special instructions</span>
          </div>
          <div className="add_To_Cart">
            <AiOutlineMinusCircle className="plus_icon"/><span>2</span><AiOutlinePlusCircle className="minus_icon"/><button>add to cart <span>$25.00</span></button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FoodChoiceIndex;
const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  font-family: ${Fonts.primaryFont};
  text-transform: capitalize;
  .choice_Banner {
    width: 100%;
    height: 30rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      /* transform: translate(); */
    }
  }
  .choice_Content {
    background-color: #fff;
    padding: 2rem 5rem;
    .head {
      .recipe_name {
        ${Flex}
        justify-content: space-between;
        text-transform: capitalize;

        h1 {
          font-size: 2rem;
          padding: 0.5rem 0;
          &:last-of-type {
            color: ${Colors.secondaryColor};
          }
        }
      }
      .recipe_rating {
        ${Flex};
        gap: 2rem;
        .star,
        .recipie_time,
        .recipie_delivery {
          ${Flex};
          gap: 0.4rem;
        }

        .star {
          .starIcon {
            font-size: 1.4rem;
            color: ${Colors.secondaryColor};
          }
        }
        .recipie_time_icon,
        .recipie_delivery_icon {
          color: ${Colors.primaryColor};
          font-size: 1.4rem;
        }
      }
      .ingredients_tabs_div {
        ul {
          ${Flex};
          justify-content: center;
          padding: 1rem 0;
          li {
            list-style: none;
            padding: 0.5rem 1rem;
            text-transform: capitalize;
            color: ${Colors.terteryColor};
          }
          .active {
            color: ${Colors.terteryColor2};
          }
        }
      }
      .top_Choice{
        .topChoiceHead{
          ${Flex};
          justify-content:  space-between;
          padding: 1rem 0;
          font-size: 1.2rem;
          span:last-child{
            background-color: ${Colors.lightPrimaryColor};
            padding: .2rem 1.2rem;
            border-radius: 1rem;
            color: ${Colors.secondaryColor};
          }
          
        }
        .choiceOptions{
          padding: .2rem 0;
          input{
            margin-right: 1rem;
            accent-color: ${Colors.secondaryColor};
            
          }
        }
      }
      .Special_instructions{
        ${Flex};
        justify-content: center;
        color: ${Colors.secondaryColor};
        font-size: 1.2rem;
        gap: 1rem;
        cursor: pointer;


      }
      .add_To_Cart{
        ${Flex};
        justify-content: center;
        padding: 1rem .5rem;
        gap: 1rem;
        font-size: 1.5rem;
        color: ${Colors.secondaryColor};
        & > span{
          color: ${Colors.helperColor};
          font-size: 1.2rem;
        }
        .minus_icon, .plus_icon{
          cursor: pointer;

        }
        button{
          padding: .5em 1.5em;
          font-size: 1.2rem;
          text-transform: capitalize;
          border-radius: 1rem;
          border: none;
          background-color: ${Colors.primaryColor};
          color: #fff;
          cursor: pointer;
          &:active{
            background-color: rgba(10,135,145, .8);
          }
        }
      }

    }
  }

  @media (max-width: 1024px) {
  }
`;
