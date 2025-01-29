import React from "react";

const DessertItem = ({ name, category, price, images, onAddToCart }) => {
  return (
    <div className="dessert-item">
      <img
         src={ "/images/" + images.thumbnail}
        alt={name}
        className="dessert-item-image"
      />
        <button onClick={() => onAddToCart(name)} className="add-to-cart-btn">
          Add to Cart
        </button>
      <div className="dessert-item-details">
        <h4 className="dessert-name">{name}</h4>
        <p className="dessert-category">{category}</p>
        <p className="dessert-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default DessertItem;
