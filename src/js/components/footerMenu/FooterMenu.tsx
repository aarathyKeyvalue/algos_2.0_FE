import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import FOOTER_MENU from './constants';
import styles from './styles.scss';

const FooterMenu = (props) => {
  const { activeMenu, setActiveMenu} = props;
  const [hoverMenu, setHoverMenu] = useState<string>('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    const currentItem = FOOTER_MENU.find((e) => e.pathName === pathname);
    if (currentItem) setActiveMenu(currentItem.id)
  }, []);
  const onClick = (footer) => {
    setActiveMenu(footer.id);
    if (location.pathname !== footer.pathName) navigate(footer.pathName);
  }
  return (
    <div className={styles.footerMenuContainer}>
      {FOOTER_MENU.map((footer) => (
        <div
          className={`${styles.eachItem} ${activeMenu === footer.id && styles.active}`}
          onClick={() => onClick(footer)}
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