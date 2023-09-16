import React from "react";
import styles from './styles.scss';
import ACTIONS from './constants';

const Actions = () => {
  return (
    <div className={styles.actions}>
      {ACTIONS?.map((action) => (
        <div className={`${styles.each} ${styles[action.type]}`}>
          <div className={styles.infoVal}>{action.info}</div>
          <div className={styles.image}>
            <img src="assets/svg/garden/watering_can.svg" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Actions;