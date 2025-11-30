import iconError from "../../../assets/img/icon-error.svg";
import styles from "./ErrorIcon.module.css"

interface ErrorIconProps {
    visible?: boolean;
    className?: string;
}

export default function ErrorIcon({ visible= false }: ErrorIconProps) {
    if (!visible) return null;


return <img 
src={iconError} 
alt="Icon error" 
className={styles.errorIcon}
aria-hidden="true" />; 
}