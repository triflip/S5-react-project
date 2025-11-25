import React from "react";
import LogoMobile from "../../atoms/Logo/LogoMobile";
import CloseIcon from "../../atoms/CloseIcon/CloseIcon";
import styles from "./MobileMenu.module.css";
import LoginButton from "../../atoms/LoginButton/LoginButton";

interface MobileMenuProps {
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.header}>
                <LogoMobile />

                <button 
                    className={styles.closeButton} 
                    onClick={onClose} 
                    aria-label="Close menu"
                >
                    <CloseIcon size={24} />
                </button>

                <nav className={styles.nav}>
                    <a href="#features" className={styles.link}>Features</a>
                    <a href="#download" className={styles.link}>Download</a>
                    <a href="#contact" className={styles.link}>Contact</a>
                </nav>
                
                <LoginButton/>
            </div>
        </div>
    );
};

export default MobileMenu;