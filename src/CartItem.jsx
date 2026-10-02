import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  addItem,
  removeItem,
  updateQuantity,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const handleIncrease = (id) => {
    dispatch(
      updateQuantity({
        id,
        change: 1,
      })
    );
  };

  const handleDecrease = (id) => {
    dispatch(
      updateQuantity({
        id,
        change: -1,
      })
    );
  };

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <nav className="navbar">
          <div className="logo">
            Paradise Nursery
          </div>

          <div className="nav-links">
            <Link to="/">Home</Link>

            <Link to="/plants">Plants</Link>

            <Link to="/cart">
              🛒 Cart (0)
            </Link>
          </div>
        </nav>

        <div className="empty-cart">
          <h1>Shopping Cart</h1>

          <p>Your cart is empty.</p>

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

  return (
    <div className="cart-page">
      <nav className="navbar">
        <div className="logo">
          Paradise Nursery
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/plants">Plants</Link>

          <Link to="/cart">
            🛒 Cart ({totalItems})
          </Link>
        </div>
      </nav>

      <h1>Shopping Cart</h1>

      <h2>
        Total Plants: {totalItems}
      </h2>

      {cartItems.map((item) => {
        const itemTotal =
          item.price * item.quantity;

        return (
          <div
            className="cart-item"
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.name}
              className="plant-image"
            />

            <h2>{item.name}</h2>

            <p>
              <strong>Unit Price:</strong>{" "}
              ₹{item.price}
            </p>

            <p>
              <strong>Total Cost:</strong>{" "}
              ₹{itemTotal}
            </p>

            <div className="quantity-controls">
              <button
                onClick={() =>
                  handleDecrease(item.id)
                }
                aria-label={`Decrease ${item.name} quantity`}
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  handleIncrease(item.id)
                }
                aria-label={`Increase ${item.name} quantity`}
              >
                +
              </button>
            </div>

            <button
              className="delete-button"
              onClick={() =>
                dispatch(
                  removeItem(item.id)
                )
              }
            >
              Delete
            </button>
          </div>
        );
      })}

      <div className="cart-summary">
        <h2>
          Total Cost: ₹{totalCost}
        </h2>

        <button
          className="checkout-button"
          onClick={handleCheckout}
        >
          Checkout
        </button>

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