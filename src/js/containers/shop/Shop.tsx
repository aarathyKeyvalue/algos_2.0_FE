import React from 'react';
import styles from './styles.scss';
import ProductCard from 'app/components/header/ProductCard/ProductCard';

const Shop = () => {
  return (
    <div className={styles.container}>
      <ProductCard
        product={{
          name: 'The Tashi Junior',
          manufacture: 'TASHI',
          starRating: 3,
          totalReviews: 20,
          currentPrice: '599.00',
          actualPrice: '799.00'
        }}
      />
    </div>
  );
};

export default Shop;
