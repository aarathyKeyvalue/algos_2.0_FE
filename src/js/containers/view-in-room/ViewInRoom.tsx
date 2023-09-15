import React from 'react'
import styles from './styles.scss';
import { useNavigate } from 'react-router-dom';

const ViewInRoom = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.viewInRoomContainer}>
      <iframe
        className={styles.iframeContainer}
        src="http://localhost:8081/index.html" />
      <div
        className={styles.backButtonContainer}
        role="presentation"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src="assets/svg/header/back.svg" />
      </div>
    </div>
  )
}

export default ViewInRoom