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
        <h3>Favourite</h3>
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
`;
