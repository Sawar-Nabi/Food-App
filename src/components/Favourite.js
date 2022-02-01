import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FavouriteCard from "./FavouriteCard";
import { Constant } from "../constants";
const { Fonts, Colors } = Constant;

const Favourite = () => {
  return (
    <Section>
      <div className="favourite_header">
        <h4>Favourite</h4>
        <Link to="" className="see_all">
          See All
        </Link>
      </div>
      <div className="home_card_slider">
        <FavouriteCard />
        <FavouriteCard />
        <FavouriteCard />
        <FavouriteCard />
      </div>
    </Section>
  );
};

export default Favourite;

const Section = styled.section`
  width: 100%;
  .favourite_header {
    width: 100%;
    padding: 10px 30px;
    font-family: ${Fonts.primaryFont};
    display: flex;
    justify-content: space-between;
    .see_all {
      color: ${Colors.secondaryColor};
    }
  }

  .home_card_slider {
    &::-webkit-scrollbar {
      width: 15px;
      height: 0px;
      background-color: ${Colors.secondaryColor};
    }
    padding: 15px 40px;
    display: flex;
    overflow: auto;
    gap: 20px;
  }

  @media only screen and (max-width: 768px) {
    .favourite_header {
      padding: 10px 0.7rem;
    }

    .home_card_slider {
      padding: 15px 1rem;
      gap: 0.3rem;
    }
  }
`;
