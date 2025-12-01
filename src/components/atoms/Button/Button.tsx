import styles from "../Button/Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "red" | "blue" | "white" | "transparent"; 
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "red",
  className
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className ?? ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
