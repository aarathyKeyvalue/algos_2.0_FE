import React from "react";
import styles from "./styles.scss";

const Input = ({ content, onChange, placeholder, maxLength = 5000 }) => {
  return (
    <div className={styles.inputContainer}>
      <textarea
        className={styles.textarea}
        value={content}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  );
};

export default Input;
