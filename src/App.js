import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Components/Redux/store";
import "./App.css"; 
import ProductsPage from "./Components/ProductsPage";
import AddProductPage from "./Components/AddProductPage";
import EditProductPage from "./Components/EditProductPage";
import HuongDan from "./Components/HuongDan";


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
         
          <div className="sidebar">
            <div>
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Hướng dẫn
              </NavLink>
              
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
              Quản lý hàng hóa
              </NavLink>
             
            </div>
          </div>
      
          <div className="main-content">
            <Routes>
              <Route path="/" element={<HuongDan />} />
              <Route path="/huong-dan" element={<HuongDan />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/add-product" element={<AddProductPage />} />
              <Route path="/edit-product/:id" element={<EditProductPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
