import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign_up from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";
import Navigation from "./components/Navigation";

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

        <Route path="admin" element={<h1> Admin page </h1>}>
          
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationLinks;
