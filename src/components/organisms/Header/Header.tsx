import HamburguerIcon from "../../atoms/HamburguerIcon/HamburguerIcon";
import LogoMobile from "../../atoms/Logo/LogoMobile";
import MobileMenu from "../../molecules/MobileMenu/MobileMenu";
import React from "react";


function Header() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <header>
            <LogoMobile/>
            <button type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu" className="hamburger-button">
                <HamburguerIcon />
            </button>
            {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
        </header>
    )
}

export default Header;



