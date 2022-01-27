import React from "react";
import { Link } from "react-router-dom";
import { Constant } from "../constants";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { IoOptionsSharp } from "react-icons/io5";
import breakfast from "../media/breakfast.png";
import burger from "../media/burger.png";
import coffee from "../media/coffee.png";
import drink from "../media/drink.png";
import pizza from "../media/pizza.png";
const { Fonts, Colors } = Constant;

const HomeBanner = () => {
  return (
    <Section>
      <div className="banner_search">
        <Link to="">
          <FiSearch className="search_icons" />
        </Link>
        <input type="search" placeholder="Search..." />
        <IoOptionsSharp className="search_option" />
      </div>
      <div className="banner_nav">
        <Link to=''>
          <img src={breakfast} alt="" />
          <div>Breakfast</div>
        </Link>
        <Link to=''>
          <img src={burger} alt="" />
          <div>Burger</div>
        </Link>
        <Link to=''>
          <img src={pizza} alt="" />
          <div>Pizza</div>
        </Link>
        <Link to=''>
          <img src={coffee} alt="" />
          <div>Coffee</div>
        </Link>
        <Link to=''>
          <img src={drink} alt="" />
          <div>Drink</div>
        </Link>
      </div>
    </Section>
  );
};

export default HomeBanner;

const Section = styled.section`
  width: 100%;
  height: 350px;
  background-color: ${Colors.primaryColor};
  border-radius: 0% 0% 50% 50% / 0% 0% 15% 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
  gap: 5rem;
  font-family: ${Fonts.primaryFont};
  .banner_search {
    width: 70%;
    height: 15%;
    background-color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: center;
    border-radius: 0.6rem;
    display: flex;
    align-items: center;
    .search_icons {
      font-size: 1.5rem;
    }
    .search_option {
      font-size: 1.5rem;
      color: ${Colors.secondaryColor};
    }
    input {
      width: 95%;
      height: 2.5rem;
      background-color: transparent;
      padding: 1rem;
      border: none;
      &:focus {
        outline: none;
      }
    }
  }

  .banner_nav {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    padding: 0 4rem;
    > a {
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: .3s linear;
      &:hover {
          transform: translateY(-10px);
      }
      img {
        width: 4rem;
        margin-bottom: 1rem;
      }
      > div {
        color: ${Colors.terteryColor};
        font-size: 1rem;
        letter-spacing: 0.08rem;
      }
    }
  }
`;
