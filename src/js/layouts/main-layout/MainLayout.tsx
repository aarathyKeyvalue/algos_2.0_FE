import React, { FC } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Shop from "app/containers/shop/Shop";
import styles from "./styles.scss";
import Community from "app/containers/community/Community";
import ShopByCategory from "app/containers/shop-by-category/ShopByCategory";
import SplashScreen from "app/containers/splashScreen/SplashScreen";
import HomeLayout from "./HomeLayout";
import ProductDetails from "app/containers/product-details/ProductDetails";
import ViewInRoom from "app/containers/view-in-room/ViewInRoom";
import AppLayout from "./AppLayout";
import Garden from "app/containers/garden/Garden";
import CreatePost from "app/containers/create-post/CreatePost";

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
            <Route path="/app/shop-by-category" element={<ShopByCategory />} />
            <Route path="/app/garden" element={<Garden />} />
            <Route path="/app/community" element={<Community />} />
          </Route>
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/view-in-room" element={<ViewInRoom />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
};
export default MainLayout;
