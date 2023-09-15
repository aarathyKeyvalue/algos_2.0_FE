import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardMedia } from "@mui/material";

import BasicRating from "app/components/BasicRating/BasicRating";
import PriceView from "app/components/PriceView/PriceView";
import styles from "./styles.scss";

interface ProductCardType {
  product: any;
  showQuantity?: boolean;
  showSaveForLater?: boolean;
  onQtyDecrease?: () => void;
  onQtyIncrease?: () => void;
}

const ProductCard: FC<ProductCardType> = (props) => {
  const {
    product,
    showQuantity = false,
    showSaveForLater = false,
    onQtyDecrease,
    onQtyIncrease
  } = props;
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
              <Box>
                <Button
                  variant="contained"
                  disableElevation
                  sx={buttonStyles.button}
                  disableRipple
                  disableFocusRipple
                  disableTouchRipple
                  onClick={(e) => e.stopPropagation()}
                >
                  Qty: <div
                    className={styles.quantityContainer}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onQtyDecrease) onQtyDecrease();
                    }}
                    role="presentation"
                  >
                    <div className={styles.qtyChangeButton}>-</div>
                    {product?.quantity}
                    <div
                      className={styles.qtyChangeButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onQtyIncrease) onQtyIncrease();
                      }}
                      role="presentation"
                    >+</div>
                  </div>
                </Button>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const buttonStyles = {
  button: {
    borderRadius: 20,
    height: "38px",
    textTransform: "none",
    fontWeight: "bold",
    width: 'fit-content',
    backgroundColor: "#fff",
    border: "1px solid #1D1D1D",
    color: "#1D1D1D",
    padding: '4px 9px',
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
};
export default ProductCard;
