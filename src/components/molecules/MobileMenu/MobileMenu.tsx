import React from "react";

import CloseIcon from "../../atoms/CloseIcon/CloseIcon";
import styles from "./MobileMenu.module.css";
import Button from "../../atoms/Button/Button";
import SocialIcon from "../../atoms/SocialIcon/SocialIcons";
import facebookIcon from "./../../../assets/img/icon-facebook.svg";
import twitterIcon from "./../../../assets/img/icon-twitter.svg";
import whiteLogo from "../../../assets/img/logo-bookmark-all-white.svg"


interface MobileMenuProps {
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
    return (
       <div className={styles.overlay}>
  <div className={styles.header}>
    <div className={styles.headerTop}>
      <div className={styles.logo}>
        <img src={whiteLogo} alt="Bookmark logo" />
      </div>

      <button 
        className={styles.closeButton} 
        onClick={onClose} 
        aria-label="Close menu"
      >
        <CloseIcon size={24} />
      </button>
    </div>

    <nav className={styles.nav}>
      <a href="#features" className={styles.link}>Features</a>
      <a href="#download" className={styles.link}>Download</a>
      <a href="#contact" className={styles.link}>Contact</a>
    </nav>

       <Button variant="transparent" className={styles.loginTransparent}>
        Login
      </Button>


    <div className={styles.social}>
      <SocialIcon href="#" src={facebookIcon} alt="Follow us on Facebook" />
      <SocialIcon href="#" src={twitterIcon} alt="Follow us on Twitter" />
    </div>
  </div>
</div>
    );
};

export default MobileMenu;