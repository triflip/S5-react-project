import styles from "./LogoMobile.module.css";
import logoMobile from "../../assets/img/logo-bookmark.svg";

function LogoMobile() {
    return (
        <img
            src={logoMobile} 
            alt="Company logo"
            className={styles.logo}
        />
    );
}

export default LogoMobile;