import React from "react";
import styled from "styled-components";
import CommonNav from "../CommonNav";
import { AiFillStar } from "react-icons/ai";
import { Constant } from "../../constants";

const { Colors, Flex, CardListStyle, Fonts } = Constant;

const Filter = () => {
  const btnCatogary = [
    "dairy",
    "pizza",
    "breakfast",
    "soups",
    "salads",
    "burgar",
    "chicken",
    "meat",
  ];
  const Starbutton = [1,2,3,4,5]
 
  return (
    <Section>
      <div className="nav_div">
        <CommonNav
          title="filter"
          icon="reset"
          iconColor={Colors.secondaryColor}
        />
      </div>

      <div className="category">
        <h2>category</h2>
        <div className="tabs_wrapper">
          <button>food</button>
          <button>drinks</button>
          <button>dessert</button>
        </div>
      </div>

      <div className="Foodgroups">
        <h2>food groups</h2>
        <div className="Food_groups_data">
          {btnCatogary.map((btn) => (
            <button>{btn}</button>
          ))}
        </div>
      </div>
      <div className="rating_div">
        <h2>rating</h2>
        <div className="star_button_wrapper">
          {Starbutton.map(star => <button>{star} <AiFillStar /></button>)}
        </div>
      </div>

    </Section>
  );
};

export default Filter;
const Section = styled.div`
  padding: 1rem;
  font-family: ${Fonts.primaryFont};
  .nav_div {
    /* padding: 1.5rem 0; */
  }
  .category{
    padding: 1rem;
    h2 {
      font-weight: 500;
    }
    .tabs_wrapper {
      padding: 1rem;
      ${Flex};
      gap: 1rem;
      button {
        padding: 0.5em 2em;
        font-size: 1.2rem;
        background-color: ${Colors.terteryColor};
        border: none;
        border-radius: 0.5rem;
        &:active{
          background-color: ${Colors.primaryColor};
          color: #fff;
        }
      }
    }
  }
    .Foodgroups {
      padding: 1rem;
      h2{
        font-weight: 500;

      }
      .Food_groups_data {
padding: 1rem;
      ${Flex};
      gap: 1rem;
        button {
          padding: 0.5em 2em;
        font-size: 1.2rem;
        background-color: ${Colors.terteryColor};
        border: 1px solid ${Colors.primaryColor};
        border-radius: 0.5rem;
        &:active{
          background-color: ${Colors.primaryColor};
          color: #fff;
        }

        }
      }
    }
  
`;
