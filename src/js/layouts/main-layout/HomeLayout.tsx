import React from "react";
import { Outlet } from "react-router-dom";

import Header from "app/components/header/Header";
import styles from './styles.scss';
import Footer from "app/components/footer/Footer";
import FooterMenu from "app/components/footerMenu/FooterMenu";

const HomeLayout = () => {

  return (
    <div className={styles.homeLayoutContainer}> 
      <Header titleCenter hasSearch hasMenu title={<img className={styles.urban} src="assets/svg/app/urbanBotanica.svg" />} />
    <Outlet/>
    </div>
  )
}

export default HomeLayout;