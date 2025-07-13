import React from "react";
import styles from "../styles/ApiButton.module.css";

type ApiButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const ApiButton: React.FC<ApiButtonProps> = ({
  onClick,
  disabled,
  children,
}) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default ApiButton;
