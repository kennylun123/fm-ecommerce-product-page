import styles from "./header.module.css";
import utils from "./utils.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className={`${styles.header} ${utils.flex}`}>
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
        <div className={`${styles.navMenuRight} ${utils.flex}`}>
          <button className={styles.cart}>
            <img src="images/icon-cart.svg"></img>
          </button>
          <div className={styles.avatar}>
            <img src="images/image-avatar.png"></img>
          </div>
        </div>
      </header>
    </>
  );
}
