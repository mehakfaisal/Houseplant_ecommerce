import React from 'react';

const plants = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 35, category: 'Indoor', image: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Snake Plant', price: 20, category: 'Low Maintenance', image: 'https://via.placeholder.com/100' },
  { id: 3, name: 'Peace Lily', price: 25, category: 'Flowering', image: 'https://via.placeholder.com/100' },
  { id: 4, name: 'Monstera', price: 30, category: 'Indoor', image: 'https://via.placeholder.com/100' },
  { id: 5, name: 'Succulent Set', price: 15, category: 'Low Maintenance', image: 'https://via.placeholder.com/100' },
  { id: 6, name: 'Orchid', price: 40, category: 'Flowering', image: 'https://via.placeholder.com/100' },
];

const ProductList = ({ cartItems, setCartItems }) => {
  const isInCart = (id) => cartItems.some(item => item.id === id);

  const handleAddToCart = (plant) => {
    setCartItems([...cartItems, { ...plant, quantity: 1 }]);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Our Plants</h2>
      {['Indoor', 'Low Maintenance', 'Flowering'].map(category => (
        <div key={category}>
          <h3>{category}</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {plants.filter(p => p.category === category).map(plant => (
              <div key={plant.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '5px', backgroundColor: '#fff' }}>
                <img src={plant.image} alt={plant.name} width="100" height="100" />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>
                <button onClick={() => handleAddToCart(plant)} disabled={isInCart(plant.id)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
