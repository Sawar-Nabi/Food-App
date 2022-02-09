import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineCompass } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Constant } from "../constants";
const { Fonts, Colors } = Constant;

const BottomMenu = () => {
  return (
    <Menu>
      <ul>
        <li>
          <Link to="/">
            <BiHomeAlt />
          </Link>
        </li>
        <li>
          <Link to="/">
            <AiOutlineCompass />
          </Link>
        </li>
        <li>
          <Link to="/">
            <AiOutlineShoppingCart />
          </Link>
        </li>
        <li>
          <Link to="/">
            <BsBookmark />
          </Link>
        </li>
        <li>
          <Link to="/">
            <AiOutlineUser />
          </Link>
        </li>
      </ul>
    </Menu>
  );
};

export default BottomMenu;

const Menu = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: #fff;
  ul {
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 5rem;
    li {
      a {
        svg {
          color: ${Colors.terteryColor};
          font-size: 1.5rem;
        }
      }
    }
  }
`;