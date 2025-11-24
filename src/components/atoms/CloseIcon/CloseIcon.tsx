
import closeIcon from "../../../assets/img/icon-close.svg";

interface CloseIconProps {
    size?: number;
}

const CloseIcon: React.FC<CloseIconProps> = ({ size = 24 }) => {
    return (
        < img
            src={closeIcon}
            alt="Close menu"
            width= {size}
            height={size}
        />
    );
};

export default CloseIcon;