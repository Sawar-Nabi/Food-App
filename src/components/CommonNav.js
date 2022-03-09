import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Constant } from "../constants";
const { Fonts, Colors } = Constant;

const CommonNav = (props) => {
  const { title, color, icon, iconColor, style, icon1, pagelink } = props;
  return (
    <Nav style={style}>
      <div>
        <Link to={pagelink} className="nav_back" style={{ color: iconColor }}>
          <IoIosArrowBack />
        </Link>
      </div>
      <div>
        <Link to="" className="" style={{ color: color, fontWeight: "500" }}>
          {title}
        </Link>
      </div>
      <div>
        <Link to="" className="" style={{ color: iconColor }}>
          {icon}
        </Link>
        <Link to="" className="" style={{ color: iconColor }}>
          {icon1}
        </Link>
      </div>
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
  > div {
    a {
    color: #000;
  }
  &:last-child{
      display: flex;
      gap: 1rem;
      /* background-color: red; */
    }
  }
  

  @media only screen and (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;
