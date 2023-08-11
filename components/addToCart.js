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
      <div className={`${styles.productCounter} ${utils.flex} ${utils.fw700}`}>
        <button className={`${styles.btnDecrease}`} onClick={onDecrease}>
          <img
            src="images/icon-minus.svg"
            alt="Icon decrease"
            aria-label="Decrease item"
          ></img>
        </button>
        <span className={`${styles.productCount} ${utils.textNeutral700}`}>
          {count}
        </span>
        <button className={`${styles.btnIncrease}`} onClick={onIncrease}>
          <img
            src="images/icon-plus.svg"
            alt="Icon increase"
            aria-label="Increase item"
          ></img>
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
