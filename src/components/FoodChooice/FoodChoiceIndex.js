import React from 'react';
import styled from 'styled-components';
import { Constant } from "../../constants";
import choiceBannerImg from "../../media/choicebanner.jpg"

const { Fonts, Colors, Flex, CardListStyle } = Constant;

const FoodChoiceIndex = () => {
  return (
      <Section>
        <div className="choice_Banner"></div>
        <div className="choice_Content">
        <div className="head">
            <h1>Mcdonald's</h1>
           
          </div>
        </div>
      </Section>
  )
};

export default FoodChoiceIndex;
const Section = styled.section`
 width: 100%;
  min-height: 100vh;
  font-family: ${Fonts.primaryFont};
.choice_Banner{
    width: 100%;
    height: 30rem;
    background-image: url(${choiceBannerImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.choice_Content{
    background-color: #333;
    padding: 2rem;
}
`