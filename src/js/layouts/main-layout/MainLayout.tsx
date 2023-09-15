import React, { FC } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Shop from "app/containers/shop/Shop";

import styles from "./styles.scss";
import HomeLayout from "./HomeLayout";
import Header from "app/components/header/Header";
import ProductDetails from "app/containers/product-details/ProductDetails";
import Footer from "app/components/footer/Footer";
import FooterMenu from "app/components/footerMenu/FooterMenu";

const MainLayout: FC<object> = () => {
  return (
    <div className={styles.mainLayoutWrapper}>
      <Header hasMenu titleCenter hasSearch title="Shop" />
      <Router>
        <Routes>
          <Route path="" element={<Navigate to="/home" />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeLayout />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
      </Router>
      <Footer>
        <FooterMenu />
      </Footer>
    </div>
  );
};
export default MainLayout;
