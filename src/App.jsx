import React, { useState } from "react";
import Cart from "./Cart";
import Dessert from "./Desserts";
import "./styles.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [desserts] = useState([
    {
      name: "Chocolate Cake",
      category: "Cake",
      price: 4.99,
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Strawberry Tart",
      category: "Tart",
      price: 3.49,
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Lemon Pie",
      category: "Pie",
      price: 5.29,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const handleAddToCart = (name) => {
    const dessert = desserts.find((d) => d.name === name);
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
            {desserts.map((dessert) => (
              <Dessert
                key={dessert.name}
                name={dessert.name}
                category={dessert.category}
                price={dessert.price}
                images={{ thumbnail: dessert.image }}
                onAddToCart={handleAddToCart}
                inCart={cartItems.some((item) => item.name === dessert.name)}
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
