import React from "react";
import "./styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SliderDemo from "./components/SliderDemo";
import MyCart from "./components/MyCart";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/slider" element={<SliderDemo />} />
        <Route path="/" element={<Header />} />
        <Route path="/mycart" element={<MyCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
