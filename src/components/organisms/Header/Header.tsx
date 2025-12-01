import React from "react";
import HamburguerIcon from "../../atoms/HamburguerIcon/HamburguerIcon";
import LogoMobile from "../../atoms/Logo/LogoMobile";
import MobileMenu from "../../molecules/MobileMenu/MobileMenu";
import styles from "./Header.module.css"
import NavLinks from "../../molecules/NavLinks";

function Header() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
       <header className={styles.header}>
            <LogoMobile/>
            <button type="button" 
            onClick={() => setMenuOpen(true)} 
            aria-label="Open menu" 
            className="hamburgerButton">
                <HamburguerIcon />
            </button>

            <div className={styles.desktopNav}>
    <NavLinks />
  </div>

            {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
        </header>
    )
}

export default Header;



