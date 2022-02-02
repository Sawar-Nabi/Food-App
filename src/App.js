import React from "react";
import "./styles/style.css";
import { Constant } from "./constants";
import styled from "styled-components";
import OpenComponent from "./components/openComponent/OpenComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodChoiceIndex from "./components/FoodChooice/FoodChoiceIndex";
const { Fonts,  } = Constant;

const App = () => {
  return (
    <BrowserRouter>
    <Section>
    <Routes>
    <Route path="/" element={<OpenComponent/>}/>
    <Route path="/open" element={<FoodChoiceIndex/>}/>
    
    </Routes>
     
    </Section>
    </BrowserRouter>
  );
};

export default App;

const Section = styled.section`
 
`;
