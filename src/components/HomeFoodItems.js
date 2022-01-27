import React from "react";
import styled from "styled-components";
import { Card_css } from "./CommonCardCss";
import { BsFillBookmarkFill } from "react-icons/bs";
import {GiForkKnifeSpoon} from 'react-icons/gi'
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import { Constant } from "../constants";
const { Fonts, Colors } = Constant;

const HomeFoodItems = () => {
  return (
    <Card>
      <Link to="">
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
              <span><GiForkKnifeSpoon/> Burger</span>
              <span><GoLocation/> 2.1km</span>
            </div>
            <div className="company_actions">
              
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default HomeFoodItems;

const Card = styled.div`
  /* background-color: red; */
  font-family: ${Fonts.primaryFont};
  padding: 0 3rem;
  .food_item_container {
    width: 20rem;
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
    gap: .2rem;
    .company_title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.5rem;
      span{
        &:first-child{
          font-size: 1.5rem;
        }
      }
    }
  }

  .company_subtitle {
    padding: 0 0.5rem;
    display: flex;
    gap: 20px;
  }
`;
