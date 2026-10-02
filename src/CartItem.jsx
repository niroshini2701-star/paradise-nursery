import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Total number of plants
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total cost of all plants
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Checkout button
  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  // Empty cart
  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <nav className="navbar">
          <div className="logo">Paradise Nursery</div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/plants">Plants</Link>
            <Link to="/cart">🛒 Cart (0)</Link>
          </div>
        </nav>

        <div className="empty-cart">
          <h1>Shopping Cart</h1>

          <p>Your cart is empty.</p>

          <Link to="/plants" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Paradise Nursery</div>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/plants">Plants</Link>

          <Link to="/cart">
            🛒 Cart ({totalItems})
          </Link>
        </div>
      </nav>

      {/* Cart Heading */}
      <h1>Shopping Cart</h1>

      <h2>Total Plants: {totalItems}</h2>

      {/* Cart Items */}
      {cartItems.map((item) => {
        const itemTotal = item.price * item.quantity;

        return (
          <div className="cart-item" key={item.id}>

            {/* Plant Thumbnail */}
            <img
              src={item.image}
              alt={item.name}
              className="plant-image"
            />

            {/* Plant Name */}
            <h2>{item.name}</h2>

            {/* Unit Price */}
            <p>
              <strong>Unit Price:</strong> ₹{item.price}
            </p>

            {/* Total Price for this plant */}
            <p>
              <strong>Total Cost:</strong> ₹{itemTotal}
            </p>

            {/* Quantity Controls */}
            <div className="quantity-controls">

              <button
                onClick={() =>
                  dispatch(decreaseQuantity(item.id))
                }
                aria-label={`Decrease ${item.name} quantity`}
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  dispatch(increaseQuantity(item.id))
                }
                aria-label={`Increase ${item.name} quantity`}
              >
                +
              </button>

            </div>

            {/* Delete Button */}
            <button
              className="delete-button"
              onClick={() =>
                dispatch(removeFromCart(item.id))
              }
            >
              Delete
            </button>

          </div>
        );
      })}

      {/* Cart Summary */}
      <div className="cart-summary">

        <h2>Total Cost: ₹{totalCost}</h2>

        {/* Checkout */}
        <button
          className="checkout-button"
          onClick={handleCheckout}
        >
          Checkout
        </button>

        {/* Continue Shopping */}
        <Link
          to="/plants"
          className="continue-shopping"
        >
          Continue Shopping
        </Link>

      </div>

    </div>
  );
}

export default CartItem;