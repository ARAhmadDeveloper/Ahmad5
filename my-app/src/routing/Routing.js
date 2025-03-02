import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Navbar from "../components/navbar/Navbar";
import ProductDetail from "../pages/productDetail/ProductDetail";
import CartedProducts from "../pages/cartedProducts/CartedProducts";
import Address from "../pages/address/Address";
import Checkout from "../pages/checkout/Checkout";
import Orders from "../pages/orders/Orders";

export default function Routing() {
  return (
    <BrowserRouter>
      {" "}
      {/* Remove this */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/cartedProducts" element={<CartedProducts />} />
      </Routes>
      <Routes>
        <Route path="/address" element={<Address/>} />
      </Routes>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Routes>
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}
