import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, setCartItems }) => {
  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleIncrement = (id) => {
    setCartItems(
      cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    );
  };

  const handleDecrement = (id) => {
    setCartItems(
      cartItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)
    );
  };

  const handleDelete = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Your Cart</h2>
      <p>Total Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
      <p>Total Cost: ${totalCost}</p>

      {cartItems.map(item => (
        <div key={item.id} style={{ borderBottom: '1px solid #ddd', padding: '1rem 0' }}>
          <img src={item.image} alt={item.name} width="60" height="60" />
          <strong>{item.name}</strong> - ${item.price} x {item.quantity}
          <div>
            <button onClick={() => handleIncrement(item.id)}>+</button>
            <button onClick={() => handleDecrement(item.id)} disabled={item.quantity <= 1}>-</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        </div>
      ))}

      <button onClick={() => alert('Checkout Coming Soon!')}>Checkout</button>
      <Link to="/products"><button>Continue Shopping</button></Link>
    </div>
  );
};

export default CartPage;
