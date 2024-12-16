import React, { useState } from 'react';
import Dessert from './components/Dessert';
import Cart from './components/Cart';
import data from './data/data.json';

const App = () => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (dessertName) => {
    const dessertInCart = cart.find(item => item.name === dessertName);
    if (dessertInCart) {
      setCart(cart.map(item => 
        item.name === dessertName ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      const newDessert = data.find(item => item.name === dessertName);
      setCart([...cart, { ...newDessert, quantity: 1 }]);
    }
  };

  const removeFromCart = (dessertName) => {
    setCart(cart.filter(item => item.name !== dessertName));
  };

  const increaseQuantity = (dessertName) => {
    setCart(cart.map(item => 
      item.name === dessertName ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (dessertName) => {
    setCart(cart.map(item => 
      item.name === dessertName && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };

  return (
    <div className="app">
      <div className="desserts-list">
        {data.map(dessert => (
          <Dessert
            key={dessert.name}
            {...dessert}
            onAddToCart={addToCart}
            inCart={cart.some(item => item.name === dessert.name)}
          />
        ))}
      </div>
      <Cart
        cartItems={cart}
        onRemoveItem={removeFromCart}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
      />
    </div>
  );
};

export default App;