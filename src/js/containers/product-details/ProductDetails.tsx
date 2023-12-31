import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from './styles.scss';
import { useNavigate } from 'react-router-dom';
import Header from 'app/components/header/Header';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import BasicRating from 'app/components/BasicRating/BasicRating';
import PriceView from 'app/components/PriceView/PriceView';

const ProductDetails = () => {
  const navigate = useNavigate();
  const product = {
    name: 'TASHI',
    manufacture: 'The Tashi Junior',
    starRating: 3,
    totalReviews: '20',
    currentPrice: '599.00',
    actualPrice: '799.00'
  }

  return (
    <>
      <Header
        hasBack
        hasCart
      />
      <div className={styles.productDetailsWrapper}>
        <div className={styles.productViewer}>
          <Carousel
            showThumbs={false}
          >
            <div className={styles.productImageCard}>
              <img
                className={styles.productImage}
                src="assets/svg/product-image-1.svg"
              />
              <div className={styles.viewProductButtonContainer}>
                <div
                  className={styles.viewProductButton}
                  onClick={() => {
                    navigate('/view-in-room')
                  }}
                >
                  <img src="assets/svg/view-product-icon.svg" alt="" />
                  View in your room
                </div>
              </div>
            </div>
            <div className={styles.productImageCard}>
              <img
                className={styles.productImage}
                src="assets/svg/product-image-1.svg"
              />
            </div>
            <div className={styles.productImageCard}>
              <img
                className={styles.productImage}
                src="assets/svg/product-image-1.svg"
              />
            </div>
          </Carousel>
        </div>
        <div className={styles.productBasicDetails}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Typography sx={{ fontSize: 12 }} color="#1D1D1D66">
              {product?.name}
            </Typography>
            <Typography sx={{ fontSize: 16 }} color="#1D1D1D">
              {product?.manufacture}
            </Typography>
            <BasicRating
              starCount={product?.starRating}
              totalReviewCount={product?.totalReviews}
              isReadOnly
              showRatingCountFullText
            />
            <PriceView
              currentPriceCustomClass={styles.currentPrice}
              actualPriceCustomClass={styles.actualPrice}
              actualPrice={product?.actualPrice}
              currentPrice={product?.currentPrice}
            />
          </Box>
        </div>
        <div className={styles.producDescContainer}>
          <div className={styles.productDescSubHeader}>
            Compatible Plants
          </div>
          <div className={styles.productDesc}>
            Grow any green leafy VEGETABLES (like Lettuce, Spinach, Basil, Mint, etc) HERBS (like Oregano, Thyme, etc) and SALADS easily.
          </div>
          <div className={styles.productDescSubHeader}>
            Product information
          </div>
          <div className={styles.productDesc}>
            6X more plants: The Vertical orientation allows the system to grow 6 times the number of plants grown in soil (in the same area).In-built-lightning system: The system comes with a set of grow lights which enables to grow plants even in places where there is no sunlight.Hydroponic technology: The Tashi Pro employs our proprietary mix of both NFT and DWC technology which has been engineered specifically for Indian conditions. This allows the system to sustain fully grown plants for more than 1 week without any power to the recirculating pump, unlike other imported NFT pipes that may cause decay to the plant if the water is stopped from recirculating for more than 24 hours.All in one: The Tashi is an all inclusive kit that comes with Lights, shades, net pots, clay balls, water pump, reservoir, nutrients and even seeds. The instructions booklet with a brief grow guide is also provided to get you started.
          </div>
        </div>
      </div>
      <div className={styles.callToActionsContainer}>
        <div className={`${styles.button} ${styles.primaryButton}`}>
          Buy now
        </div>
        <div className={`${styles.button} ${styles.secondaryButton}`}>
          Add to cart
        </div>
      </div>
    </>
  )
}

export default ProductDetails