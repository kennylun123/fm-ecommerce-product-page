"use client";

import styles from "./addToCart.module.css";
import utils from "./utils.module.css";
import { useState, useContext } from "react";
import { CartContext } from "./cartProvider";

export default function AddToCart({ name, price, thumbnail }) {
  const contextValue = useContext(CartContext);
  const [count, setCount] = useState(0);

  const onDecrease = () => {
    count && setCount(count - 1);
  };

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onAddToCart = () => {
    if (count) {
      contextValue.setCartItems((prev) => [
        ...prev,
        {
          name: name,
          price: price,
          qty: count,
          subTotal: price * count,
          thumbnail: thumbnail,
        },
      ]);
    } else {
      alert("Please add at least 1 item.");
    }
  };

  return (
    <div className={`${styles.productPurchase} ${utils.flex}`}>
      <div
        className={`${styles.productCounter} ${utils.flex} ${utils.fw700} ${utils.fs500}`}
      >
        <button
          className={`${styles.btnDecrease} ${utils.flex}`}
          onClick={onDecrease}
        >
          -
        </button>
        <span
          className={`${styles.productCount} ${utils.flex} ${utils.textNeutral700} ${utils.fs400}`}
        >
          {count}
        </span>
        <button
          className={`${styles.btnIncrease} ${utils.flex}`}
          onClick={onIncrease}
        >
          +
        </button>
      </div>
      <button
        className={`${styles.btnAddToCart} ${utils.flex} ${utils.fw700}`}
        onClick={onAddToCart}
      >
        <img src="images/icon-cart.svg" alt="Cart Icon" />
        Add to cart
      </button>
    </div>
  );
}
