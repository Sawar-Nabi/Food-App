import React from "react";
import "./styles/style.css";
import { Constant } from "./constants";
import styled from "styled-components";
<<<<<<< HEAD
import OpenComponent from "./components/openComponent/OpenComponent";
=======
import OpenMenu from "./components/FoodPageOpener.js";
>>>>>>> b37a56ec32f838e11cfa853967368cec25ce83f7
const { Fonts, Colors } = Constant;

const App = () => {
  return (
    <Section>
<<<<<<< HEAD
      <OpenComponent/>
=======
       <OpenMenu/>
>>>>>>> b37a56ec32f838e11cfa853967368cec25ce83f7
    </Section>
  );
};

export default App;

const Section = styled.section`
  h1 {
    /* font-family: ${Fonts.primaryFont};
    color: ${Colors.primaryColor}; */
  }
`;
