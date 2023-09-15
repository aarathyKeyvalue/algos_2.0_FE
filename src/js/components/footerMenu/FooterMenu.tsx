import React, { useState } from 'react';
import FOOTER_MENU from './constants';
import styles from './styles.scss';

const FooterMenu = (props) => {
  const {onMenuClick  = () => {}} = props;

  const [activeMenu, setActiveMenu] = useState<string>('')
  const [hoverMenu, setHoverMenu] = useState<string>('');

  const onClick = (id) => {
    setActiveMenu(id);
    if (onMenuClick) onMenuClick(id);
  }
  return (
    <div className={styles.footerMenuContainer}>
      {FOOTER_MENU.map((footer) => (
        <div
          className={`${styles.eachItem} ${activeMenu === footer.id && styles.active}`}
          onClick={() => onClick(footer.id)}
          onMouseOver={() => setHoverMenu(footer.id)}
          onMouseOut={() => setHoverMenu('')}
        >
          <img src={(activeMenu === footer.id || hoverMenu === footer.id )&& footer.activeIcon || footer.inactiveIcon} />
          <div>{footer.name}</div>
        </div>
      ))}
    </div>
  )
}

export default FooterMenu