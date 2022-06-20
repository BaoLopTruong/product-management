
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LayOut from "./components/home/Layout";
import ProductPage from "./components/home/products/Product";
import LoginPage from  './components/login/Login';
import './main.css'

function App() {
  return (
    <div className="app sidebar-mini rtl"> 
     

        <LayOut>
        <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/product" element={<ProductPage/>}></Route>
        </Routes>
        </LayOut>
    
    </div>
  );
}

export default App;
