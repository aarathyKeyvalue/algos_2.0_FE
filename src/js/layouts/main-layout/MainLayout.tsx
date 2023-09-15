import React, { FC } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Shop from 'app/containers/shop/Shop';

import styles from './styles.scss';
import ProductDetails from 'app/containers/product-details/ProductDetails';
import HomeLayout from './HomeLayout';
import ViewInRoom from 'app/containers/view-in-room/ViewInRoom';

const MainLayout: FC<object> = () => {
  return (
    <div className={styles.mainLayoutWrapper}>
      <Router>
        <Routes>
          <Route path="" element={<Navigate to="/home" />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeLayout />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/view-in-room" element={<ViewInRoom />} />

        </Routes>
      </Router>
    </div>
  );
};
export default MainLayout;
