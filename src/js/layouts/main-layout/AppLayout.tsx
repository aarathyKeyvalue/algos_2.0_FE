import { Outlet } from "react-router-dom";
import Footer from "app/components/footer/Footer";
import FooterMenu from "app/components/footerMenu/FooterMenu";
import React, { useEffect, useState } from "react";
import styles from './styles.scss';

const AppLayout = () => {
  const [activeMenu, setActiveMenu] = useState<string>('')
  return (
    <div className={styles.mainLayoutWrapper}>
      <Outlet />
      <Footer>
        <FooterMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </Footer>
    </div>
  )
}

export default AppLayout