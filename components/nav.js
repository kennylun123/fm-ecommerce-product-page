"use client";

import Cart from "./cart";
import styles from "./nav.module.css";
import utils from "./utils.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);
  const toggleMenu = () => {
    setIsNavMenuOpened((prevValue) => !prevValue);
  };

  return (
    <>
      <header className={`${styles.header} ${utils.flex}`}>
        <button
          className={
            isNavMenuOpened
              ? `${styles.navMenuToggleActive} ${styles.navMenuToggle}`
              : `${styles.navMenuToggle}`
          }
          onClick={toggleMenu}
        >
          <span className={`${styles.hamburgerLine1}`}></span>
          <span className={`${styles.hamburgerLine2}`}></span>
          <span className={`${styles.hamburgerLine3}`}></span>
        </button>
        <img src="images/logo.svg" alt="logo" />
        <nav className={styles.navMenu}>
          <ul className={`${styles.navMenuLinks} ${utils.flex}`}>
            <li>
              <Link className={`${styles.navMenuLink} ${utils.flex}`} href="#">
                Collections
              </Link>
            </li>
            <li>
              <Link className={`${styles.navMenuLink} ${utils.flex}`} href="#">
                Men
              </Link>
            </li>
            <li>
              <Link className={`${styles.navMenuLink} ${utils.flex}`} href="#">
                Women
              </Link>
            </li>
            <li>
              <Link className={`${styles.navMenuLink} ${utils.flex}`} href="#">
                About
              </Link>
            </li>
            <li>
              <Link className={`${styles.navMenuLink} ${utils.flex}`} href="#">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <nav
          className={
            isNavMenuOpened
              ? `${styles.navMenuMobileActive} ${styles.navMenuMobile}`
              : styles.navMenuMobile
          }
        >
          <ul
            className={`${styles.navMenuMobileLinks} ${utils.flex} ${utils.fw700}`}
          >
            <li>
              <Link
                className={`${styles.navMenuMobileLink} ${utils.flex}`}
                href="#"
              >
                Collections
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.navMenuMobileLink} ${utils.flex}`}
                href="#"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.navMenuMobileLink} ${utils.flex}`}
                href="#"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.navMenuMobileLink} ${utils.flex}`}
                href="#"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.navMenuMobileLink} ${utils.flex}`}
                href="#"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className={`${styles.navMenuRight} ${utils.flex}`}>
          <Cart />
          <div className={`${styles.avatar} ${utils.flex}`}>
            <img src="images/image-avatar.png" alt="Icon avatar"></img>
          </div>
        </div>
      </header>
    </>
  );
}
