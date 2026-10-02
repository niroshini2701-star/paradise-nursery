import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "./CartSlice";

const plants = [
  // ---------------- INDOOR PLANTS ----------------
  {
    id: 1,
    name: "Snake Plant",
    price: 450,
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Money Plant",
    price: 300,
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 350,
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Areca Palm",
    price: 650,
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "ZZ Plant",
    price: 550,
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1632207691143-643e2c1d2f7a?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 600,
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=500&q=80",
  },

  // ---------------- FLOWERING PLANTS ----------------
  {
    id: 7,
    name: "Peace Lily",
    price: 550,
    category: "Flowering",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae1bb8?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Rose Plant",
    price: 400,
    category: "Flowering",
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Jasmine Plant",
    price: 350,
    category: "Flowering",
    image:
      "https://images.unsplash.com/photo-1597848212624-e19a7f9b8c89?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "Hibiscus Plant",
    price: 450,
    category: "Flowering",
    image:
      "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    name: "Anthurium",
    price: 700,
    category: "Flowering",
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "Marigold Plant",
    price: 250,
    category: "Flowering",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },

  // ---------------- SUCCULENT PLANTS ----------------
  {
    id: 13,
    name: "Aloe Vera",
    price: 250,
    category: "Succulent",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    name: "Jade Plant",
    price: 400,
    category: "Succulent",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "Cactus",
    price: 280,
    category: "Succulent",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 16,
    name: "Haworthia",
    price: 350,
    category: "Succulent",
    image:
      "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    name: "Echeveria",
    price: 300,
    category: "Succulent",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "String of Pearls",
    price: 500,
    category: "Succulent",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
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

      <section className="products-section">
        <h1>Our Plants</h1>

        <p className="intro-text">
          Choose beautiful plants for your home and garden.
        </p>

        {categories.map((category) => (
          <div className="category-section" key={category}>
            <h2>{category} Plants</h2>

            <div className="product-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div className="product-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />

                    <h3>{plant.name}</h3>

                    <p className="price">₹{plant.price}</p>

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