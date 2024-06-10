import React, { createContext, useState, useEffect } from 'react';
import productsData from '../data.json'; // Importing the JSON data

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Set the initial cart data from the JSON
    const initialCart = productsData.products.map((product) => ({
      ...product,
      quantity: 1 // Setting initial quantity to 1 for each product
    }));
    setCart(initialCart);
  }, []);

  useEffect(() => {
    // Update total quantity and amount whenever the cart changes
    const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const amount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalQuantity(quantity);
    setTotalAmount(amount);
  }, [cart]);

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + quantity, 0) } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, totalQuantity, totalAmount, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
