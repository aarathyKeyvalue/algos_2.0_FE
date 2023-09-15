import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia } from '@mui/material';

import BasicRating from 'app/components/BasicRating/BasicRating';
import PriceView from '../PriceView/PriceView';

interface ProductCardType {
  product: any;
}

const ProductCard: FC<ProductCardType> = (props) => {
  const { product } = props;
  const navigate = useNavigate();
  return (
    <Card
      sx={{ width: '100%', paddingBottom: '0px', boxShadow: 'none' }}
      onClick={() => navigate('/product-details')}
    >
      <CardActionArea sx={{ height: '100%' }}>
        <CardContent
          sx={{ display: 'flex', columnGap: '12px', height: '100%' }}
        >
          <CardMedia
            component="img"
            height="100%"
            image="https://www.wehydroponics.com/store/wp-content/uploads/2021/01/151.jpg"
            alt="Paella dish"
            sx={{ width: '20%', borderRadius: '8px', objectFit: 'cover' }}
          />

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
            />
            <PriceView
              actualPrice={product?.actualPrice}
              currentPrice={product?.currentPrice}
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
