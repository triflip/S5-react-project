import styles from "./HamburguerIcon.module.css";
import hamburguerIcon from "../../assets/img/icon-hamburger.svg";

function HamburguerIcon() {
    return (
        <button className={styles.button} aria-label="Opern menu">
            <img 
                src={hamburguerIcon}
                alt="Hambuguer icon"
                aria-hidden="true"
            />
        </button>
    );
}

export default HamburguerIcon;