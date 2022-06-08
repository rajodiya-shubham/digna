import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommingSoon from "./core/CommingSoon";
import Home from "./core/Home";
import Products from "./core/Products";
import { HOME, PRODUCTS, CREATORS, LICENSE, WHY_DIGNA } from "./paths";

type AppRoutesProps = {};

const AppRoutes: React.FC<AppRoutesProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<CommingSoon />} />
        <Route path={HOME} element={<Home />} />
        <Route path={PRODUCTS} element={<Products />} />
        <Route path={CREATORS} element={<Home />} />
        <Route path={LICENSE} element={<Home />} />
        <Route path={WHY_DIGNA} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
