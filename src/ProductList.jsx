import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 250,
    category: "Medicinal",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 450,
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 550,
    category: "Flowering",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae1bb8?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Money Plant",
    price: 300,
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Jade Plant",
    price: 400,
    category: "Succulent",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Spider Plant",
    price: 350,
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    name: "Cactus",
    price: 280,
    category: "Succulent",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Areca Palm",
    price: 650,
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=500&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="product-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Paradise Nursery</div>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/plants">Plants</Link>

          <Link to="/cart" className="cart-link">
            🛒 Cart ({cartCount})
          </Link>
        </div>
      </nav>

      {/* Product Section */}
      <section className="products-section">
        <h1>Our Plants</h1>

        <p className="intro-text">
          Choose beautiful plants for your home and garden.
        </p>

        {/* Categories */}
        {categories.map((category) => (
          <div className="category-section" key={category}>
            <h2>{category} Plants</h2>

            <div className="product-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div className="product-card" key={plant.id}>
                    {/* Plant Thumbnail */}
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />

                    {/* Plant Name */}
                    <h3>{plant.name}</h3>

                    {/* Plant Price */}
                    <p className="price">₹{plant.price}</p>

                    {/* Add to Cart */}
                    <button
                      className="add-cart-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProductList;