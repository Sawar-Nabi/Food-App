import React from "react";
import "./styles/style.css";
import { Constant } from "./constants";
import styled from "styled-components";
import OpenComponent from "./components/openComponent/OpenComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodChoiceIndex from "./components/FoodChooice/FoodChoiceIndex";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";
import Welcome from "./components/welcomepage/welcome";
import Filter from "./components/filter/Filter";
import Reviews from "./components/reviews/Revivews";
import UserProfile from "./components/UserProfile/UserProfile";
const { Fonts, } = Constant;

const App = () => {
  return (
    <BrowserRouter>
      <Section>
        <Routes>
          <Route path="/" element={<OpenComponent />} />
          <Route path="/choice" element={<FoodChoiceIndex />} />
          <Route path="/payment" element={<PaymentMethod/>} />
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/filter" element={<Filter/>} />
          <Route path="/reviews" element={<Reviews/>} />
          <Route path="/userprofile" element={<UserProfile/>} />
        </Routes>
      </Section>
    </BrowserRouter>
  );
};

export default App;

const Section = styled.div`
font-family: ${Fonts.primaryFont}
`;
