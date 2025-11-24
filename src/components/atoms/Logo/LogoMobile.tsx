import logoMobile from "../../../assets/img/logo-bookmark.svg";
import styles from "./LogoMobile.module.css";


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