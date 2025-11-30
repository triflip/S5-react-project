import iconError from "../../../assets/img/icon-error.svg";

interface ErrorIconProps {
    visible?: boolean;
}

export default function ErrorIcon({ visible= false }: ErrorIconProps) {
    if (!visible) return null;


return <img src={iconError} alt="Icon error" className="error-icon " aria-hidden= true />; 
}