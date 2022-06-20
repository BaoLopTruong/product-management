import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import LoginPage from './components/login/Login';
import ProductPage from './components/home/products/Product';
import HomePage from './components/home/HomePage';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/*' element={<App/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>

        </Routes>
    </BrowserRouter>

);
