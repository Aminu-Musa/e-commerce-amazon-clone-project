import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sign_up from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";
import Navigation from "./components/Navigation";
import Admin_nav from "./Admin_Components/Admin_Navigation";
import Dashboard from "./Admin_Components/Admin_Dashboard";
import Admin_Product_page from "./Admin_Components/Admin_Product_page";
import Admin_Create_product_page from "./Admin_Components/Admin_Create_product_page";
import Admin_Updateuser from "./Admin_Components/Admin_Updateuser";
import Admin_Create_user_page from "./Admin_Components/Admin_Create_user_page";
import Admin_Users_page from "./Admin_Components/Admin_Users_page";








const NavigationLinks = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Sign_up />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
        </Route>
        {/*================== ADMIN NAVIGATION ===================*/}

        <Route path="admin" element={<Admin_nav/>}>
        <Route  path="/admin" element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="product" element={<Admin_Product_page/>}/>
        <Route path="create-product" element={<Admin_Create_product_page/>}/>
        <Route path="user" element={<Admin_Users_page/>}/>
        <Route path="create-user" element={<Admin_Create_user_page/>}/>
          
        </Route>


        {/* ========================== ERROR PAGE =========================== */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationLinks;
