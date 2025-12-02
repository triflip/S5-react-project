import styles from "./NavLinks.module.css";
import Button from "../../atoms/Button/Button";

function NavLinks() {
  return (
    <nav className={styles.navMf}>
      <a href="#features" className={styles.link}>Features</a>
      <a href="#download" className={styles.link}>Download</a>
      <a href="#contact" className={styles.link}>Contact</a>
       <div className={styles.loginTransparent}>
  <Button variant="transparent">Login</Button>
</div>

<div className={styles.loginSecondary}>
  <Button variant="red">Login</Button>
</div>
    </nav>
  );
}

export default NavLinks;
