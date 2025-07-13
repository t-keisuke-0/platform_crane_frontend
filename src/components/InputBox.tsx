import React from "react";
import styles from "../styles/InputBox.module.css";

type InputBoxProps = {
  value: string;
  onChange: (value: string) => void;
};

const InputBox: React.FC<InputBoxProps> = ({ value, onChange }) => {
  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="テキストを入力"
    />
  );
};

export default InputBox;
