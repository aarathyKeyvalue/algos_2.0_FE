import React, { FC } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Shop from "app/containers/shop/Shop";
import Home from "app/containers/home/Home";
import styles from "./styles.scss";
import Community from "app/containers/community/Community";
import ShopByCategory from "app/containers/shop-by-category/ShopByCategory";
import SplashScreen from "app/containers/splashScreen/SplashScreen";
import ProductDetails from "app/containers/product-details/ProductDetails";
import ViewInRoom from "app/containers/view-in-room/ViewInRoom";
import AppLayout from "./AppLayout";
import Garden from "app/containers/garden/Garden";
import CreatePost from "app/containers/create-post/CreatePost";
import Site from "app/containers/site/Site";
import CartLayout from "app/containers/cart-layout/CartLayout";
import Plants from "app/containers/plants/Plants";
import Subscribtion from "app/containers/subscribtion/Subscribtion";
import Profile from "app/containers/profile/Profile";

const MainLayout: FC<object> = () => {
  return (
    <div className={styles.mainLayoutWrapper}>
      <Router>
        <Routes>
          <Route path="" element={<Navigate to="/splash" replace />} />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/subscribtion" element={<Subscribtion />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/app" element={<AppLayout />}>
            <Route path="/app" element={<Navigate to="/app/home" replace />} />
            <Route path="/app/shop" element={<Shop />} />
            <Route path="/app/shop-by-category" element={<ShopByCategory />} />
            <Route path="/app/garden" element={<Garden />} />
            <Route path="/app/community" element={<Community />} />
            <Route path="/app/home" element={<Home />} />
            <Route path="/app/cart" element={<CartLayout />} />
          </Route>
          <Route path="/site/:id" element={<Site />} />
          <Route path="/site/:id/plants" element={<Plants />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/view-in-room" element={<ViewInRoom />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
};
export default MainLayout;
