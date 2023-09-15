import React, { FC } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Shop from "app/containers/shop/Shop";
import SplashScreen from "app/containers/splashScreen/SplashScreen";
import Footer from "app/components/footer/Footer";
import FooterMenu from "app/components/footerMenu/FooterMenu";

import styles from "./styles.scss";
import ProductDetails from "app/containers/product-details/ProductDetails";
import HomeLayout from "./HomeLayout";
import ViewInRoom from "app/containers/view-in-room/ViewInRoom";
import AppLayout from "./AppLayout";
import Garden from "app/containers/garden/Garden";
import Community from "app/containers/community/Community";

const MainLayout: FC<object> = () => {
  return (
    <div className={styles.mainLayoutWrapper}>
      <Router>
        <Routes>
          <Route path="" element={<Navigate to="/splash" />} />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/app" element={<AppLayout />}>
            <Route path="/app" element={<Navigate to="/app/home" />} />
            <Route path="x" element={<HomeLayout />} />
            <Route path="/app/shop" element={<Shop />} />
            <Route path="/app/garden" element={<Garden />} />
            <Route path="/app/community" element={<Community />} />
          </Route>
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/view-in-room" element={<ViewInRoom />} />
        </Routes>
      </Router>
    </div>
  );
};
export default MainLayout;
