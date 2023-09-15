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
import ProductDetails from 'app/containers/product-details/ProductDetails';

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
    </div>
  );
};
export default MainLayout;
