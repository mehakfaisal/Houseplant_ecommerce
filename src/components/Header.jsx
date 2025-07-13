import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={{ padding: '1rem', backgroundColor: '#e0ffe0', display: 'flex', justifyContent: 'space-between' }}>
      <div><Link to="/">Green Haven</Link></div>
      <nav>
        <Link to="/products" style={{ marginRight: '1rem' }}>Products</Link>
        <Link to="/cart">🛒 {total}</Link>
      </nav>
    </header>
  );
};

export default Header;