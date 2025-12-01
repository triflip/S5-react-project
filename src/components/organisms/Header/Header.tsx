import React from "react";
import HamburguerIcon from "../../atoms/HamburguerIcon/HamburguerIcon";
import LogoMobile from "../../atoms/Logo/LogoMobile";
import MobileMenu from "../../molecules/MobileMenu/MobileMenu";
import styles from "./Header.module.css"

function Header() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
       <header className={styles.header}>
            <LogoMobile/>
            <button type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu" className="hamburger-button">
                <HamburguerIcon />
            </button>
            {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
        </header>
    )
}

export default Header;



