import React, { useState } from 'react';
import Menu from './components/menu';
import Cart from './components/cart';
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setTotalCost(totalCost + item.price);
  };

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>KFC Digital Menu</h1>

      <div className="app-container">
        <Menu addToCart={addToCart} />
        {/* <Cart cartItems={cartItems} totalCost={totalCost} /> */}
      </div>
    </div>
  );
};

export default App;
