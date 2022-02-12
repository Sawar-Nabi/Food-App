import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Constant } from "../constants";
const { Fonts, Colors } = Constant;

const CommonNav = (props) => {
  const { title, color, icon } = props;
  return (
    <Nav>
      <Link to="" className="nav_back">
        <IoIosArrowBack />
      </Link>
      <Link to="" className="" style={{ color: color }}>
        {title}
      </Link>
      <Link to="" className="">
        {icon}
      </Link>
    </Nav>
  );
};

export default CommonNav;

const Nav = styled.nav`
  /* background-color: red; */
  width: 100%;
  padding: 0.5rem 3rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  font-family: ${Fonts.primaryFont};
  a {
    color: #000;
  }

  @media only screen and (max-width: 768px) {
  padding: 0.5rem 1rem;
  }
`;
