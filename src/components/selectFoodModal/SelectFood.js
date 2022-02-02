import React, { useState } from "react";
import styled from "styled-components";
import { BsChevronCompactUp } from "react-icons/bs";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { Constant } from "../../constants";
import cardIcon from "../../media/listContent.jpg";

const {  Colors, Flex, CardListStyle } = Constant;

const SelectFood = () => {
  const [counter, setcounter] = useState(0);
  const [slider, setSlider] = useState(25)
  const decreaseQuantity = () =>{
    if(counter > 0){
      setcounter(counter - 1)
    }else{
      setcounter(0)
    }
  }

  const sliderData = (e) =>{
    setSlider(e.target.value)

  }
  return (
    <Section>
      <div className="Select_Food_Modal">
        <div className="arrowicon">
          <BsChevronCompactUp />
        </div>
        <div className="card">
          <div className="cardIcon">
            <img src={cardIcon} alt="" />
          </div>
          <div className="cardContent">
            <h2>golden double burger muffin</h2>
            <h4>mcdonald's</h4>
            <h3>$15.00</h3>
          </div>
        </div>
        <div className="quantity_Div">
          <p>quantity</p>
          <div className="quantityIcons">
          <FiMinusCircle className="mimnusIcon" onClick={ decreaseQuantity}/> <span>{counter}</span> <FiPlusCircle className="PlusIcon" onClick={ () => setcounter(counter + 1)}/>
          </div>
        </div>
        <div className="mealSize">
          <p>size</p>
          <div className="sizeRange">
            <input type="range" name="" id="" min="0" max="100" value={slider} onChange={sliderData}/>
            <div className="rangeValue">
              <span>burger only</span> <span>meal</span>
            </div>
           
          </div>
        </div>


        <div className="addToCart">
          <button>add to cart <span>$15.00</span></button>
        </div>
      </div>
    </Section>
  );
};

export default SelectFood;
const Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.473);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  .Select_Food_Modal {
    width: 80%;
    background-color: #fff;
    padding: 2rem 1rem;
    border-radius: 3rem 3rem 0 0;
    text-transform: capitalize;

    .arrowicon {
      ${Flex};
      justify-content: center;
      font-size: 3rem;
      color: ${Colors.terteryColor};
    }
    .card {
      ${CardListStyle};
      ${Flex};
      box-shadow: none;
      border-bottom: 1px solid rgba(51, 51, 51, 0.473);
      border-radius: 0px;
      gap: 1rem;
      .cardIcon {
        width: 8rem;
        height: 8rem;
        img {
          width: inherit;
          height: inherit;
          border-radius: 1rem;
          object-fit: cover;
        }
      }
      .cardContent {
        line-height: 1.7;
        h2 {
          color: ${Colors.helperColor};
        }
        h4 {
          color: ${Colors.secondaryColor};
        }
      }
    }
    .quantity_Div {
      ${Flex};
      justify-content: space-between;
      padding: 1rem;

      p {
        font-size: 1.5rem;
        font-weight: 600;
      }
      .quantityIcons {
        ${Flex};
        gap: 1rem;
        font-size: 1.5rem;
        .PlusIcon, .minusIcon{
          cursor: pointer;
        }
      }
    }
    .mealSize{
      ${Flex};
      justify-content: space-between;
      padding: 1rem;

      p {
        font-size: 1.2rem;
        flex: 1;
      }
      .sizeRange{
        flex: 1;
        ${Flex};
        flex-direction: column;
        input{
          width: 80%;
          height: 2px;
          background: #ccc;
          appearance: none;
          margin-bottom: 1rem;
          cursor: pointer;

          &::-webkit-slider-thumb{
            appearance: none;
            border: .7rem solid ${Colors.secondaryColor};
            border-radius: 50%;
            width: .5rem;
            height: .5rem;
            background-color: #fff;
            box-sizing: content-box;

          }
        }
        .rangeValue{
            ${Flex};
            justify-content: space-around;
            width: 80%;

        }
      }
    }
    .addToCart{
      ${Flex};
      justify-content: center;
      padding: 1rem;
      button{
        padding: .7em 1.7em;
        text-transform: capitalize;
        border: none;
        border-radius: .5rem;
        font-size: 1.3rem;
        ${Flex};
        gap: 10rem;
        color: #fff;
        background-color: ${Colors.primaryColor};
        cursor: pointer;
        &:active{
          background-color:#0a8891c9;
        }

      }
    }
  }
`;
