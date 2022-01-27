import React from "react";
import "./styles/style.css";
import { Constant } from "./constants";
import styled from "styled-components";
import OpenComponent from "./components/openComponent/OpenComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const { Fonts, Colors } = Constant;

const App = () => {
  return (
    <BrowserRouter>
    <Section>
    <Routes>
    <Route path="/" element={<OpenComponent/>}/>
    
    </Routes>
     
    </Section>
    </BrowserRouter>
  );
};

export default App;

const Section = styled.section`
  h1 {
    /* font-family: ${Fonts.primaryFont};
    color: ${Colors.primaryColor}; */
  }
`;
