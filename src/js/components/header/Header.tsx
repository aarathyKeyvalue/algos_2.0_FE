import React from "react";
import styles from './styles.scss';

const Header = (props) => {
  const { hasSearch, hasBack, hasCart, hasMenu, title, titleCenter} = props;

  return (
    <div className={styles.headerContainer}>
      {hasMenu && (
        <div className={styles.headerMenu}>
          <img src="assets/svg/header/menu.svg" />
        </div>
      )}
      {hasBack && (
        <div className={styles.headerBack}>
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
      {(hasSearch || hasCart) && (
        <div className={styles.rightIcons}>
          {hasSearch && <div className={styles.headerSearch}>
            <img src="assets/svg/header/search.svg" />
          </div>}
          {hasCart && (
            <div className={styles.headerCart}>
              <img src="assets/svg/header/cart.svg" />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Header;