import React from "react";
import "./styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SliderDemo from './components/SliderDemo'

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path='/slider' element={<SliderDemo/>} />
        <Route path='/' element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
