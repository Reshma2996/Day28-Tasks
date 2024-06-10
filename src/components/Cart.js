import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
  const { cart, totalAmount } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="cart-summary">
        <p>Subtotal: ${totalAmount.toFixed(2)}</p>
        <p>Shipping: FREE</p>
        <p>Total: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
