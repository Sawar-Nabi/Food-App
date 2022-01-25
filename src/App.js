import React from "react";
import "./styles/style.css";
import { Constant } from "./constants";
import styled from "styled-components";
const { Fonts, Colors } = Constant;

const App = () => {
  return (
    <Section>
      {console.log(Colors)}
      <h1>hello</h1>
    </Section>
  );
};

export default App;

const Section = styled.section`
  h1 {
    font-family: ${Fonts.primaryFont};
    color: ${Colors.primaryColor};
  }
`;
