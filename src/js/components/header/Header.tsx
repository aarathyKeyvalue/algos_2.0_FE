import React from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../sidebar/Sidebar";

import styles from './styles.scss';

const Header = (props) => {
  const {
    hasSearch,
    hasBack,
    hasCart,
    hasMenu,
    hasRefresh,
    hasVoiceCommand,
    title,
    titleCenter
  } = props;

  const navigate = useNavigate();

  return (
    <div className={styles.headerContainer}>
      {hasMenu && (
           <Sidebar/>
      )}
      {hasBack && (
        <div className={styles.headerBack} onClick={() => navigate(-1)}>
          <img src="assets/svg/header/back.svg" />
        </div>
      )}
      {title && (
        <div
          className={styles.headerTitle}
          style={{width: !titleCenter && '100%' || '',
        marginLeft: !titleCenter && '18px' || ''}}
        >
          {title}
        </div>
      )}
      {(hasSearch || hasCart || hasVoiceCommand || hasRefresh) && (
        <div className={styles.rightIcons}>
          {hasSearch && <div className={styles.headerSearch}>
            <img src="assets/svg/header/search.svg" />
          </div>}
          {hasCart && (
            <div className={styles.headerCart}>
              <img src="assets/svg/header/cart.svg" />
            </div>
          )}
          {hasRefresh && (
            <div className={styles.headerRefresh}>
              <img src="assets/svg/header/refresh.svg" />
            </div>
          )}
          {hasVoiceCommand && (
            <div className={styles.headerVoice}>
            <img src="assets/svg/header/alexa.svg" />
          </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Header;