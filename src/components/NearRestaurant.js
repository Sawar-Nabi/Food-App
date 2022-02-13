import React from "react";
import styled from "styled-components";
import { Constant } from "../constants";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { Search } from "./HomeBanner";
import CommonNav from "./CommonNav";
import HomeFoodItems from "./HomeFoodItems";
const { Fonts, Colors } = Constant;

const NearRestaurant = () => {
  const itemArray = [
      { item1: "Chines", item2: "Fast Food", item3: "Coffee" },
      { item1: "Chines", item2: "Fast Food", item3: "Coffee" },
      { item1: "Chines", item2: "Fast Food", item3: "Coffee" },
      { item1: "Chines", item2: "Fast Food", item3: "Coffee" },
      { item1: "Chines", item2: "Fast Food", item3: "Coffee" },
      { item1: "Chines", item2: "Fast Food", item3: "Coffee" },
      { item1: "Chines", item2: "Fast Food", item3: "Coffee" },
      { item1: "Chines", item2: "Fast Food", item3: "Coffee" },
      { item1: "Chines", item2: "Fast Food", item3: "Coffee" },
      { item1: "Chines", item2: "Fast Food", item3: "Coffee" },
      { item1: "Chines", item2: "Fast Food", item3: "Coffee" },
      { item1: "Chines", item2: "Fast Food", item3: "Coffee" },
    ];

  return (
    <Section>
      <CommonNav
        color="#000"
        icon={<IoMdNotificationsOutline />}
        fucn={inputDataList}
      />
      <div>
        <Search />
      </div>
      <div className="near_title">
        <h3>Near By Restaurants</h3>
        <p>150+ Restaurants found near you</p>
      </div>
      <div className="restaurant_list">
        {itemArray.map((item, i) => (
          <HomeFoodItems
            key={i}
            img="https://thumbs.dreamstime.com/b/kfc-fast-food-restaurant-logo-its-building-sagunto-spain-february-kfc-fried-chicken-fast-food-restaurant-logo-its-building-139640468.jpg"
            title="KFC"
            subtitle={item}
            commonIcon={<BsDot/>}
          />
        ))}
      </div>
    </Section>
  );
};

const inputDataList = () => {
  return (
    <div style={{ padding: "0 1rem" }}>
      <InputBox onSubmit={(e) => e.preventDefault()}>
        <span>
          <MdOutlineLocationOn />
        </span>
        <input list="browser" placeholder="Search..." />
        <datalist id="browser">
          <option value="Sawar Nabi" />
          <option value="Muneeb Bhat" />
          <option value="Hanan Bhat" />
          <option value="Aijaz Rather" />
          <option value="Mudasir Bhat" />
        </datalist>
      </InputBox>
    </div>
  );
};

export default NearRestaurant;

const Section = styled.section`
  width: 100%;
  /* background-color: red; */
  font-family: ${Fonts.primaryFont};
  .near_title {
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    p {
      color: #aaa;
    }
  }

  .restaurant_list {
      margin-top: 1rem;
    width: 100%;
    /* background-color: beige; */
    padding: 0 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    font-family: ${Fonts.primaryFont};
    .near_title {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      p {
        color: #aaa;
      }
    }

    .restaurant_list {
      /* background-color: red; */
      padding: 0 1rem;
      justify-content: flex-start;
      flex-direction: column;
      gap: 0rem;
    }
  }
`;

const InputBox = styled.form`
  font-family: ${Fonts.primaryFont};
  display: flex;
  align-items: center;
  width: 25rem;
  height: 1.9rem;
  background-color: #f2f2f2;
  padding: 0 1rem;
  border-radius: 2rem;
  color: #aaa;

  span {
    display: flex;
    align-items: center;
  }

  input {
    padding-left: 1rem;
    color: #aaa;
    border: none;
    width: 100%;
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }

  @media (max-width: 570px) {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #f2f2f2;
    padding: 0 1rem;
  }
`;
