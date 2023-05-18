import React from "react";
import ListPage from "./pages/ListPage";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  return (
    <Routes>
      <Route path="" element={<ListPage />}></Route>
    </Routes>
  );
}

export default ProductFeature;
