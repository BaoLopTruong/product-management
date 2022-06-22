import './main.css'

import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LayOut from "./components/home/Layout";
import ProductPage from "./components/home/products/Product";
import ProductDetail from "./components/home/products/ProductDetail";
import ProductAdd from './components/home/products/ProductAdd';

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cenderlar from './components/home/Cendelar';



function App() {
  const navigate = useNavigate();
  const userlogined = useSelector(state => state.userlogined);

  useEffect(() => {
    if (!userlogined.username) {
      navigate("/login");
    }
  }, [userlogined, navigate]);
  return (
    <div className="app sidebar-mini rtl">
      <LayOut>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product/" element={<ProductPage />}></Route>
          <Route path="/product/add" element={<ProductAdd />}></Route>
          <Route path={`/product/:productId`} element={<ProductDetail/>}></Route>
          <Route path={'/cenderlar'} element={<Cenderlar/>}></Route>
        </Routes>
      </LayOut>

    </div>
  );
}

export default App;
