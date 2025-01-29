import React, { useState } from "react";
import Cart from "./components/Cart";
import DessertItem from "./components/Dessert";
import data from "./data.json"; 
import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);


  const handleAddToCart = (name) => {
    const dessert = data.find((d) => d.name === name);
    const existingItem = cartItems.find((item) => item.name === name);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...dessert, quantity: 1 }]);
    }
  };


  const handleRemoveItem = (name) => {
    setCartItems(cartItems.filter((item) => item.name !== name));
  };

  const handleIncrease = (name) => {
    setCartItems(
      cartItems.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };


  const handleDecrease = (name) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Delicious Desserts</h1>
      </header>
      <main className="app-main">
        <section className="desserts-section">
          <h2>Our Desserts</h2>
          <div className="desserts-grid">
            {data.map((dessert) => (
              <DessertItem
                key={dessert.name}
                name={dessert.name}
                category={dessert.category}
                price={dessert.price}
                images={dessert.images}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>
        <section className="cart-section">
          <Cart
            cartItems={cartItems}
            onRemoveItem={handleRemoveItem}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        </section>
      </main>
    </div>
  );
};

export default App;