import React from 'react';

const MenuItem = ({ item, addToCart, removeFromCart, isInCart }) => {
  const handleToggleCart = () => {
    if (isInCart) {
      removeFromCart(item);
    } else {
      addToCart(item);
    }
  };

  return (
    <div className="menu-item">
      <div className="item-info">
        <img src={item.image} alt={item.name} className="item-image" />
        <div className="item-details">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>${item.price.toFixed(2)}</p>
        </div>
      </div>
      <button onClick={handleToggleCart}>
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default MenuItem;
