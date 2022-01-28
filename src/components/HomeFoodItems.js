import React from "react";
import styled from "styled-components";
import { Card_css } from "./CommonCardCss";
import { BsFillBookmarkFill } from "react-icons/bs";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Constant } from "../constants";
const { Fonts, Colors } = Constant;

const HomeFoodItems = () => {
  return (
    <Card>
      <div className="food_item_container">
        <div className="card_items_img">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/220px-McDonald%27s_logo.svg.png"
            alt=""
          />
        </div>
        <div className="card_content">
          <div className="company_title">
            <span>Mc Donald'S</span>
            <span>
              <BsFillBookmarkFill />
            </span>
          </div>
          <div className="company_subtitle">
            <span>
              <GiForkKnifeSpoon className="company_icons" /> Burger
            </span>
            <span>
              <GoLocation className="company_icons" /> 2.1km
            </span>
          </div>
          <div className="company_actions">
            <span>
              <AiFillStar /> 5.0
            </span>
            <span>
              <BiTimeFive /> 10 min.
            </span>
            <span>
              <BsFillTelephoneFill /> Contact
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HomeFoodItems;

const Card = styled.div`
  // flex: 1;
  /* background-color: red; */
  font-family: ${Fonts.primaryFont};
  /* padding: 0 3rem; */
  .food_item_container {
    width: 20rem;
    /* min-width: 15rem; */
    height: auto;
    ${Card_css}
    .card_items_img {
      /* background-color: green; */
      width: 100%;
      img {
        width: 100%;
      }
    }
  }

  .card_content {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    .company_title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.5rem;
      span {
        &:first-child {
          font-size: 1.5rem;
        }
      }
    }
  }

  .company_subtitle {
    padding: 0 0.5rem;
    display: flex;
    gap: 20px;
    color: ${Colors.terteryColor};
    span {
      svg {
        font-size: 0.9rem;
      }
    }
  }

  .company_actions {
    padding: 0 0.5rem;
    display: flex;
    justify-content: space-between;
    span {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      color: ${Colors.terteryColor};
      &:first-child {
        svg {
          color: ${Colors.secondaryColor};
          font-size: 1.3rem;
        }
      }
      &:last-child {
        svg {
          color: ${Colors.primaryColor};
        }
      }
    }
  }
`;
