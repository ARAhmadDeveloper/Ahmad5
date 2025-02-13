import React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Contact from "../pages/contact/Contact"
import Navbar from "../components/navbar/Navbar";
import ProductDetail from "../pages/productDetail/ProductDetail";



  
  export default function Routing() {
    return(
    <BrowserRouter> {/* Remove this */}
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
  </BrowserRouter>
    )
  }





