import SocialIcon from "../../atoms/SocialIcon/SocialIcons";
import styles from "./Footer.module.css";

import footerLogo from "./../../../assets/img/logo-bookmark-footer.svg";
import facebookIcon from "./../../../assets/img/icon-facebook.svg";
import twitterIcon from "./../../../assets/img/icon-twitter.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={footerLogo} alt="Bookmark logo" />
      </div>

      <nav className={styles.navFooter}>
        <ul>
          <a href="#features" className={styles.link}>Features</a>
          <a href="#download" className={styles.link}>Download</a>
          <a href="#contact" className={styles.link}>Contact</a>
        </ul>
      </nav>

      <div className={styles.social}>
        <SocialIcon
          href="#"
          src={facebookIcon}
          alt="Follow us on Facebook"
        />
        <SocialIcon
          href="#"
          src={twitterIcon}
          alt="Follow us on Twitter"
        />
      </div>
    </footer>
  );
}

export default Footer;
