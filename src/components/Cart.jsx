import React from 'react';
import { RemoveItem, IncrementQuantity, DecrementQuantity } from './Icons';

const Cart = ({ cartItems, onRemoveItem, onIncrease, onDecrease }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.name} className="cart-item">
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <div>
              <button onClick={() => onDecrease(item.name)}>
                <DecrementQuantity />
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => onIncrease(item.name)}>
                <IncrementQuantity />
              </button>
            </div>
            <button onClick={() => onRemoveItem(item.name)}>
              <RemoveItem />
            </button>
          </div>
        ))
      )}
      <div className="total">
        <p>Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;