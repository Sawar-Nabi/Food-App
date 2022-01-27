import React from "react";
import "./styles/style.css";
import { Constant } from "./constants";
import styled from "styled-components";
import OpenComponent from "./components/openComponent/OpenComponent";
const { Fonts, Colors } = Constant;

const App = () => {
  return (
    <Section>
      <OpenComponent/>
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
