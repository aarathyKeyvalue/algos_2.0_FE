import React from "react";
import styles from './styles.scss';

const Item = (props) => {
  const { type, children, style } = props;

  return (
    <div className={`${styles[type]} ${style}`}>
      {children}
    </div>
  )
}

export default Item;