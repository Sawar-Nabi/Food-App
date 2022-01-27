import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import { Constant } from "../constants";
import Card_image from "../media/Card_image.jpg";
const { Fonts, Colors } = Constant;

const FavouriteCard = () => {
  return (
    <Section>
      <div className="card_main">
        <div className="card_img">
          <img src={Card_image} alt="" />
        </div>
        <div className="card_title">
          <h3>Burger King</h3>
        </div>
        <div className="card_subtitle">
          <ul>
            <li>Burger</li>
            <li>American Food</li>
            <li>Desh Food</li>
          </ul>
        </div>
        <div className="card_actions">
          <div>
            <span>
              <AiFillStar className="rating_icon"/> 4.9 (151)
            </span>
          </div>
          <div>
            <span>
              <GoLocation /> (150m)
            </span>
            <span>
              <BiTimeFive /> (15)
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FavouriteCard;

const Section = styled.section`
  width: 100%;
  /* background-color: yellow; */
  /* padding: 15px 40px; */

  .card_main {
    align-self: auto;
    width: 450px;
    /* min-width: 200px; */
    height: 310px;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 32px 64px rgba(0,0,0,0.07);
    padding: 0.4rem;
    font-family: ${Fonts.primaryFont};
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    .card_img {
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 1rem;
      }
    }

    .card_title {
      padding-left: 0.5rem;
    }
    .card_subtitle {
      ul {
        display: flex;
        gap: 25px;
        list-style: none;
        color: ${Colors.terteryColor};
        padding-left: 0.5rem;
      }
    }
    .card_actions {
      padding: 0 0.5rem;
      display: flex;
      justify-content: space-between;
      color: ${Colors.terteryColor};
      font-size: 0.9rem;
      > div {
        display: flex;
        gap: 10px;
        .rating_icon {
            color: ${Colors.secondaryColor};
            font-size: 1.2rem;
        }
        &:last-child {
          span {
            background-color: #eee;
            /* opacity: .3; */
            padding: 0.1rem 0.5rem;
            border-radius: 0.8rem;
            color: ${Colors.secondaryColor};
          }
        }
        span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      }
    }
  }
`;
