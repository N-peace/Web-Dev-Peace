import React from 'react';

function Cart({ cartItems, totalCost }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <p>Total Cost: ${totalCost}</p>
      {/* Add functionality to review, modify, or remove items */}
    </div>
  );
}

export default Cart;
