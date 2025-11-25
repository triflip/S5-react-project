import React from "react";
import styles from "./LoginButton.module.css";

interface LoginButtonProps {
  onClick?: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.loginButton} onClick={onClick}>
      Login
    </button>
  );
};

export default LoginButton;
