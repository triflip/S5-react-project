import styles from "./HamburguerIcon.module.css";
import hamburguerIcon from "../../../assets/img/icon-hamburger.svg";

function HamburguerIcon() {
    return (
        <button className={styles.button} aria-label="Open menu">
            <img 
                src={hamburguerIcon}
                alt="Hamburger icon"
                aria-hidden="true"
            />
        </button>
    );
}

export default HamburguerIcon;