import React, { FC } from 'react';

import styles from './styles.scss';

interface PriceView {
  currentPrice: any;
  actualPrice: any;
  currentPriceFontSize?:number;
  actualPriceFontSize?:number;
}

const PriceView: FC<PriceView> = (props) => {
  const {
    currentPrice = '0',
    actualPrice = '0',
    actualPriceFontSize,
    currentPriceFontSize
  } =props;
  return (
    <div className={styles.priceContainer}>
      <span className={styles.currentPrice} style={{fontSize:currentPriceFontSize ? `${currentPriceFontSize}px`:'15px' }} >{`₹ ${currentPrice}`}</span>
      <span className={styles.actualPrice}  style={{fontSize:actualPriceFontSize ? `${actualPriceFontSize}px`:'13px' }}>{`₹${actualPrice}`}</span>
    </div>
  );
};

export default PriceView;
