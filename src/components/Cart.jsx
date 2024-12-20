import React from "react";
import { RemoveItem, IncrementQuantity, DecrementQuantity } from "./Icons";

const Cart = ({ cartItems, onRemoveItem, onIncrease, onDecrease }) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.name} className="cart-item">
              <div className="item-info">
                <h4 className="item-name">{item.name}</h4>
                <p className="item-price">${item.price.toFixed(2)}</p>
              </div>
              <div className="item-quantity">
                <button onClick={() => onDecrease(item.name)}>
                  <DecrementQuantity />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => onIncrease(item.name)}>
                  <IncrementQuantity />
                </button>
              </div>
              <button
                className="remove-item-btn"
                onClick={() => onRemoveItem(item.name)}
              >
                <RemoveItem />
              </button>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="total">
          <p>
            <strong>Order Total:</strong> ${total.toFixed(2)}
          </p>
          <button className="confirm-order-btn">Confirm Order</button>
        </div>
      )}
    </div>
  );
};

export default Cart;