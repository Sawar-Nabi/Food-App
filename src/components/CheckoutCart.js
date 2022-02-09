import React from "react";
import styled from "styled-components";
import { images } from "../ImagesApi";
import { Constant } from "../constants";
import IncreDecrement from "./IncreDecrement";
const { Fonts, Colors } = Constant;

const CheckoutCart = () => {
  return (
    <>
      {images.map((img) => (
        <Card>
          <div className="img_container">
            <img src={img.img} alt="" />
          </div>
          <div className="content_container">
            <h3>{img.itemName}</h3>
            <div className="price_couter_container">
              <h3>{img.price}$</h3>
              <IncreDecrement/>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default CheckoutCart;

const Card = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  display: flex;
  gap: 1rem;
  font-family: ${Fonts.primaryFont};

  .img_container {
    max-width: 15rem;
    padding: 0.5rem;
    background: #ccc;
    border-radius: 0.5rem;
    img {
      width: 100%;
      border-radius: inherit;
    }
  }

  .content_container {
      width: 100%;
    h3 {
      padding-top: 0.5rem;
    }
    .price_couter_container {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
  }
`;
