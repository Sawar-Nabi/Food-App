import React from "react";
import styled from "styled-components";
import { Constant } from "../constants";
import { GoLocation } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import Logo from "../media/Logo.png";
const { Fonts, Colors } = Constant;

const Home = () => {
  return (
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
        <img src={Logo} alt="" />
      </div>

      <div className="nav_right_section">
        <IoNotificationsOutline />
      </div>
    </Section>
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
      color: ${Colors.terteryColor};
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
    font-size: 20px;
    color: ${Colors.terteryColor};
  }
`;
