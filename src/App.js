import React from "react";
import "./styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SliderDemo from "./components/SliderDemo";
import MyCart from "./components/MyCart";
import CommonNav from "./components/CommonNav";
import IncreDecrement from "./components/IncreDecrement";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/slider" element={<SliderDemo />} />
        <Route path="/" element={<Header />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/commonnav" element={<CommonNav />} />
        <Route path="/counter" element={<IncreDecrement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
