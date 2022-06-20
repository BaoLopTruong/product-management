
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LayOut from "./components/home/Layout";

import ProductPage from "./components/home/products/Product";
import ProductDetail from "./components/home/products/ProductDetail";

import './main.css'

function App() {
  return (
    <div className="app sidebar-mini rtl">
      <LayOut>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product/" element={<ProductPage />}></Route>
          <Route path={`/product/:productId`} element={<ProductDetail/>}></Route>
        </Routes>
      </LayOut>

    </div>
  );
}

export default App;
