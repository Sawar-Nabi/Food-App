import React from "react";
import styled from "styled-components";
import { Constant } from "../../constants";
import choiceBannerImg from "../../media/choiceBanner.jpg";
import {
  AiFillStar,
  AiOutlineClockCircle,
  AiFillDollarCircle,
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
                <li>ingradients</li>
                <li>review</li>
              </ul>
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
          font-size: 1.5rem;
          padding: 0.5rem;
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
      .ingredients_tabs_div{
        ul{
          ${Flex};
          justify-content: center;
          li{
            list-style: none;
            padding: .5rem 1rem;
            text-transform: capitalize;
            
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    
  }

`;
