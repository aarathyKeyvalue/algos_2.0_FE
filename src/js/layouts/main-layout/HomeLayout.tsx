import React from "react";
import { Outlet } from "react-router-dom";

import Header from "app/components/header/Header";
import styles from "./styles.scss";
import Footer from "app/components/footer/Footer";
import FooterMenu from "app/components/footerMenu/FooterMenu";

const HomeLayout = () => {
  return (
    <div className={styles.homeLayoutContainer}>
      <Header hasCart titleCenter hasBack hasSearch title="Shop" />
      <Outlet />
      <Footer>
        <FooterMenu />
      </Footer>
    </div>
  );
};

export default HomeLayout;
