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
import StaffPage from './components/home/staff/Staff';
import StaffAdd from './components/home/staff/StaffAdd';
import StaffDetail from './components/home/staff/StaffDetail';
import OrdersPage from './components/home/orders/Orders';
import OrderDetail from './components/home/orders/OrderDetail';
import OrderAdd from './components/home/orders/OrderAdd';
import Report from './components/home/report/Report';



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
          <Route path={'/staff'} element={<StaffPage/>}></Route>
          <Route path={'/staff/add'} element={<StaffAdd/>}></Route>
          <Route path={`/staff/:staffId`} element={<StaffDetail/>}></Route>
          <Route path='/order' element={<OrdersPage/>}></Route>
          <Route path= {'/order/add'} element={<OrderAdd/>}></Route>
          <Route path= {`/order/:orderId`} element={<OrderDetail/>}></Route>
          <Route path='/report' element={<Report/>}></Route>

        </Routes>
      </LayOut>

    </div>
  );
}

export default App;
