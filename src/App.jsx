import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import ProductList from "./ProductList";
import AboutUs from "./AboutUs";
import CartItem from "./CartItem";
import "./App.css";

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <h1>Paradise Nursery</h1>

        <p>
          Bring nature home with beautiful plants for every space.
        </p>

        <Link to="/plants" className="get-started-button">
          Get Started
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Home / Landing Page */}
      <Route path="/" element={<Home />} />

      {/* Plants Page */}
      <Route path="/plants" element={<ProductList />} />

      {/* About Us Page */}
      <Route path="/about" element={<AboutUs />} />

      {/* Shopping Cart */}
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;