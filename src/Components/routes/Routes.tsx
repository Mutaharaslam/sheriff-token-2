import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../../pages/about";
import Home from "../../pages/home";
import { BuyChart } from "../../pages/buy-chart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="buy-chart" element={<BuyChart />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
