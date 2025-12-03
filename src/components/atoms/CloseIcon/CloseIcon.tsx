import closeIcon from "../../../assets/img/icon-close.svg";
import styles from "./CloseIcon.module.css";

interface CloseIconProps {
    size?: number;
    onClick?: () => void;
}

const CloseIcon: React.FC<CloseIconProps> = ({ onClick, size = 24 }) => {
    return (
        <button 
            className={styles.closeIcon}
            onClick={onClick}
            aria-label="Close menu"
        >
            <img 
                src={closeIcon}
                alt=""
                width={size}
                height={size}
                aria-hidden="true"
            />
        </button>
    );
};

export default CloseIcon;
