import React, { FC } from 'react';

import styles from './styles.scss';

interface PriceView {
  currentPrice: any;
  actualPrice: any;
  currentPriceCustomStyles?:string;
  actualPriceCustomStyles?:string;
}

const PriceView: FC<PriceView> = (props) => {
  const {
    currentPrice = '0',
    actualPrice = '0'
  } =props;
  return (
    <div className={styles.priceContainer}>
      <span className={styles.currentPrice} >{`₹ ${currentPrice}`}</span>
      <span className={styles.actualPrice}>{`₹${actualPrice}`}</span>
    </div>
  );
};

export default PriceView;
