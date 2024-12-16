import React from 'react';

const Dessert = ({ name, category, price, images, onAddToCart, inCart }) => {
  const handleAddToCart = () => onAddToCart(name);

  return (
    <div className={`dessert ${inCart ? 'in-cart' : ''}`}>
      <img src={images.thumbnail} alt={name} />
      <h3>{name}</h3>
      <p>{category}</p>
      <p>${price}</p>
      <button onClick={handleAddToCart}>
        {inCart ? 'In Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default Dessert;