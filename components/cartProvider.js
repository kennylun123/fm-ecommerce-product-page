"use client";

import { createContext, useState } from "react";

export const CartContext = createContext({});

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  // console.log(cartItems);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
