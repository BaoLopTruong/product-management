
import './main.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import LoginPage from './components/login/Login';
import { Provider } from "react-redux";
import store from "./redux/store";


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<App />}></Route>
                <Route exact path='/login' element={<LoginPage />}></Route>
            </Routes>
        </BrowserRouter>
    </Provider>

);
