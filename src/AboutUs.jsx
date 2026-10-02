import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-page">
      <nav className="navbar">
        <div className="logo">Paradise Nursery</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">🛒 Cart</Link>
        </div>
      </nav>

      <section className="about-section">
        <h1>About Paradise Nursery</h1>

        <p>
          Paradise Nursery is an online plant shop dedicated to bringing
          beautiful and healthy plants to homes, offices, and gardens.
        </p>

        <p>
          We offer a variety of indoor, medicinal, flowering, and succulent
          plants at affordable prices.
        </p>

        <p>
          Our goal is to make it easy for customers to discover, choose, and
          purchase plants while creating a greener and healthier environment.
        </p>

        <h2>Our Mission</h2>

        <p>
          Our mission is to connect people with nature by providing quality
          plants and a simple, user-friendly online shopping experience.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;