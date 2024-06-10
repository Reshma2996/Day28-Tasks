import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity } = useContext(CartContext);

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, -1);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.id, 1);
  };

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} className="item-image" />
      <div className="item-details">
        <h3>{item.title}</h3>
        <p>{item.brand}</p>
        <p>{item.description}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrease}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
        <p className="item-price">${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
