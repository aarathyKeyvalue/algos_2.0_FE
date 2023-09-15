import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardMedia } from "@mui/material";

import BasicRating from "app/components/BasicRating/BasicRating";
import PriceView from "app/components/PriceView/PriceView";

interface ProductCardType {
  product: any;
}

const ProductCard: FC<ProductCardType> = (props) => {
  const { product } = props;
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        position: 'relative !important',
        width: "100%",
        paddingBottom: "0px",
        boxShadow: "none",
        padding: "16px 0px",
        borderBottom: "1px solid #EFEFEF",
      }}
      onClick={() => navigate("/product-details")}
    >
      <CardActionArea sx={{ height: "100%" }}>
        <CardContent
          sx={{
            display: "flex",
            columnGap: "12px",
            height: "100%",
            padding: 0,
          }}
        >
          <CardMedia
            component="img"
            height="100px"
            width="100px"
            image="assets/svg/products/tashiPro.svg"
            alt="Paella dish"
            sx={{ maxWidth: "100px", maxHeight: "100px", borderRadius: "8px" }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "6px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "4px",
              }}
            >
              <Typography sx={{ fontSize: 12 }} color="#1D1D1D66">
                {product?.manufacture}
              </Typography>
              <Typography sx={{ fontSize: 16 }} color="#1D1D1D">
                {product?.name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "4px",
              }}
            >
              <BasicRating
                starCount={product?.starRating}
                totalReviewCount={product?.totalReviews}
              />
              <PriceView
                actualPrice={product?.actualPrice}
                currentPrice={product?.currentPrice}
              />
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
