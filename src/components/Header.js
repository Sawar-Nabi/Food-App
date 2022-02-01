import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import Logo from "../media/Logo.png";
import HomeBanner from "./HomeBanner";
import Favourite from "./Favourite";
import HomeNav from "./HomeNav";
import HomeFoodItems from "./HomeFoodItems";
import Orderslider from "./Orderslider";
import { Constant } from "../constants";
import BottomMenu from "./BottomMenu";
const { Fonts, Colors } = Constant;

const Home = () => {
  const [ slider, setslider ] = useState(10);
  return (
    <Fragment>
      <Section>
        <div className="nav_left_section">
          <div>
            <GoLocation />
          </div>
          <div>Dilvered to</div>
          <div>
            Home <IoIosArrowDown />
          </div>
        </div>

        <div className="nav_logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <div className="nav_right_section">
          <Link to="/">
            <IoNotificationsOutline />
          </Link>
        </div>
      </Section>
      <HomeBanner />
      <Favourite />
      <HomeNav />
      <Company>
        <HomeFoodItems />
        <HomeFoodItems />
        <HomeFoodItems />
        <HomeFoodItems />
        <HomeFoodItems />
        <HomeFoodItems />
        <HomeFoodItems />
        <HomeFoodItems />
      </Company>
      <br />
      <br />
      <Orderslider />
      <BottomMenu />
    </Fragment>
  );
};

export default Home;

const Section = styled.section`
  width: 100%;
  height: 60px;
  background-color: ${Colors.primaryColor};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 25px;
  font-family: ${Fonts.primaryFont};

  .nav_left_section {
    /* background-color: red; */
    display: flex;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      color: ${Colors.terteryColor2};
      &:first-child {
        margin-right: 6px;
      }
      &:last-child {
        margin-left: 15px;
        color: ${Colors.secondaryColor};
      }
    }
  }

  .nav_logo {
    display: grid;
    place-items: center;
    img {
      width: 60px;
    }
  }

  .nav_right_section {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 25px;
    a {
      color: #ccc;
    }
  }
  .food_item_container {
    background-color: red;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
    grid-template-columns: 60% 40%;
    .nav_logo {
      display: none;
    }

    .nav_left_section {
      font-size: .8rem;
    }
  }
`;

const Company = styled.div`
  width: 100%;
  /* background-color: red; */
  padding: 0 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
    display: block;
  }
`;
