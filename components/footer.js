import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/kennylun123">Kenny Ng</a>.
      </footer>
    </>
  );
}
