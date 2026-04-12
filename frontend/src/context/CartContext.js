import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '../hooks/use-toast';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('joServicesCart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('joServicesCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (service, selectedDate, selectedTime) => {
    const cartItem = {
      ...service,
      cartId: Date.now(),
      selectedDate,
      selectedTime
    };
    setCartItems([...cartItems, cartItem]);
    toast({
      title: 'Added to Cart',
      description: `${service.name} has been added to your cart.`,
    });
  };

  const removeFromCart = (cartId) => {
    setCartItems(cartItems.filter(item => item.cartId !== cartId));
    toast({
      title: 'Removed from Cart',
      description: 'Service has been removed from your cart.',
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('joServicesCart');
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      getTotalPrice,
      cartCount: cartItems.length
    }}>
      {children}
    </CartContext.Provider>
  );
};
