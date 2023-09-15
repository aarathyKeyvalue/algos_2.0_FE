import React, { FC } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Shop from 'app/containers/shop/Shop';
import SplashScreen from 'app/containers/splashScreen/SplashScreen';
import Footer from "app/components/footer/Footer";
import FooterMenu from "app/components/footerMenu/FooterMenu";

import styles from './styles.scss';
import HomeLayout from './HomeLayout';

const MainLayout:FC<object> = () => {
  return (
    <div className={styles.mainLayoutWrapper}>
      <Router>
        <Routes>
          <Route path="" element={<Navigate to="/splash" />} />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/home" element={<HomeLayout />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
      <Footer>
        <FooterMenu />
      </Footer>
    </div>
  );
};
export default MainLayout;
