import React, { FC } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Login from 'app/containers/login/Login';
import Shop from 'app/containers/shop/Shop';

import styles from './styles.scss';
import ProductDetails from 'app/containers/product-details/ProductDetails';

const MainLayout:FC<object> = () => {
  return (
    <div className={styles.mainLayoutWrapper}>
      <Router>
        <Routes>
          <Route path="" element={<Navigate to="/login" />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product-details" element={<ProductDetails />}/>
        </Routes>
      </Router>
    </div>
  );
};
export default MainLayout;
