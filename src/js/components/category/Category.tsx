import React from "react";
import styles from "./styles.scss";

const Category = (props) => {
  const { image, size, label, isSelected, onSelect = () => null } = props;

  const getRandomColor = () => "hsl(" + Math.random() * 360 + ", 10%, 75%)";

  return (
    <div className={styles.wrapper} onClick={onSelect}>
      <div
        className={styles.img}
        style={{
          width: size,
          height: size,
          backgroundColor: getRandomColor(),
          overflow: "hidden",
        }}
      >
        {image && <img src={image} alt="Category" width={size} height={size} />}
      </div>
      <div
        className={styles.label}
        style={{ fontWeight: isSelected ? 600 : 400 }}
      >
        {label}
      </div>
      {isSelected && (
        <div
          style={{
            width: "100%",
            height: 3,
            backgroundColor: "#1D1D1D",
            borderRadius: 3,
            marginTop: 10,
          }}
        ></div>
      )}
    </div>
  );
};

export default Category;
