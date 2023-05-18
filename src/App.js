import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

import ProductFeature from "./features/Product";
import DetailPage from "./features/Product/pages/DetailPage";

function App() {
  return (
    <div className="App">
      <header></header>
      <Header />
      <Routes>
        <Route path="/products" element={<ProductFeature />}></Route>
        <Route path="/products/:123" element={<DetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
