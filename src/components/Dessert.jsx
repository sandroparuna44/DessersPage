import React from "react";

const Dessert = ({ name, category, price, images, onAddToCart, inCart }) => {
  const handleAddToCart = () => onAddToCart(name);

  return (
    <div className="dessert-card">
      <img src={images.thumbnail} alt={name} />
      <h3 className="dessert-name">{name}</h3>
      <p className="dessert-category">{category}</p>
      <p className="dessert-price">${price.toFixed(2)}</p>
      <button
        className={`add-to-cart-btn ${inCart ? "in-cart-btn" : ""}`}
        onClick={handleAddToCart}
      >
        {inCart ? "In Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default Dessert;