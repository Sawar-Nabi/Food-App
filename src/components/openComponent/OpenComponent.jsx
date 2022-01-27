import React from "react";
import styled from "styled-components";
import bannerImage from "../../media/openBanner.jpg";
import { BsFillBookmarkFill,BsDot } from "react-icons/bs";
import { Constant } from "../../constants";

const { Fonts, Colors } = Constant;

const OpenComponent = () => {
  return (
    <Section>
      <div className="open_banner"></div>
      <div className="open_container">
        <div className="container_heading_div">
          <div className="head">
            <h1>Mcdonald's</h1> <BsFillBookmarkFill />
          </div>
          <div className="content_navigate_indicator">
            <span>$$</span> <BsDot/> <span>Burger</span> <BsDot/> <span>american food</span> <BsDot/><span>deshi food</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OpenComponent;
const Section = styled.section`
  width: 100%;
  height: 100vh;
  .open_banner {
    width: 100%;
    height: 30rem;
    background-image: url(${bannerImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .open_container {
    width: 100%;
    height: auto;
    position: relative;
    background-color: #fff;
    border-radius: 3rem;
    padding: 2rem;
    top: -3rem;
    .container_heading_div {
      .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: ${Fonts.primaryFont};
        font-size: 2rem;
        text-transform: capitalize;
        color:${Colors.secondaryColor};
        h1{
            color:#000;
        }
       
      }
      .content_navigate_indicator{
        display: flex;
        align-items: center;
        padding: 1rem 0;
        color: #666;
        span{
            
            margin: 0 .3rem;
            text-transform: capitalize;
        }

      }
    }
  }
`;
