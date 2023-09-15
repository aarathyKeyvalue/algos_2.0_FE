import React, { FC } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Shop from 'app/containers/shop/Shop';

import styles from './styles.scss';
import HomeLayout from './HomeLayout';

const MainLayout:FC<object> = () => {
  return (
    <div className={styles.mainLayoutWrapper}>
      <Router>
        <Routes>
          <Route path="" element={<Navigate to="/home" />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeLayout />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
};
export default MainLayout;
