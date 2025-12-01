import styles from "../Button/Button.module.css"

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "red" | "blue" | "white" | "transparent"; 
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "red"
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
