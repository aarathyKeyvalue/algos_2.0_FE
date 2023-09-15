import React, { useMemo, useState } from 'react'
import styles from './styles.scss';
import Header from 'app/components/header/Header';
import { Button } from '@mui/material';
import ProductCard from 'app/components/ProductCard/ProductCard';
import { formatCartItems } from './utils';

const buttonStyles = {
  button: {
    borderRadius: 20,
    height: "38px",
    textTransform: "none",
    fontWeight: "bold",
    width: "50%",

  },
  primary: {
    backgroundColor: "#1D2917",
    "&:hover": {
      backgroundColor: "#1D2917",
    },
  },
  secondary: {
    backgroundColor: "#fff",
    border: "1px solid #E8F6E2",
    color: "#1D1D1D",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  change: {
    backgroundColor: "#fff",
    border: "1px solid #1D1D1D",
    color: "#1D1D1D",
    width: 'fit-content',
    padding: '4px 9px',
    "&:hover": {
      backgroundColor: "#fff",
    },
  }
};
const CartLayout = () => {
  const [selectedTab, setSelectedTab] = useState("equipments");

  const cartItemsApiResponse = [{
    "id": "2d5f602f-52fa-4df5-b7d8-43d0e2088c70",
    "name": "Product 1",
    "description": "Description 1",
    "image": "image1.jpg",
    "price": 20,
    "categoryId": "35f503d0-4311-4d12-8c61-82a0f20568e5",
    "type": "marketplace-product",
    "createdAt": "2023-09-15T06:41:26.002Z",
    "updatedAt": "2023-09-15T06:41:26.002Z",
    "deletedAt": null,
    "category": {
      "id": "35f503d0-4311-4d12-8c61-82a0f20568e5",
      "name": "Kits",
      "description": "Description 1",
      "createdAt": "2023-09-15T06:52:14.021Z",
      "updatedAt": "2023-09-15T06:52:14.021Z",
      "deletedAt": null
    }
  },
  {
    "id": "2d5f602f-52fa-4df5-b7d8-43d0e2088c71",
    "name": "Product 2",
    "description": "Description 2",
    "image": "image2.jpg",
    "price": 20,
    "categoryId": "35f503d0-4311-4d12-8c61-82a0f20568e5",
    "type": "marketplace-product",
    "createdAt": "2023-09-15T06:41:26.002Z",
    "updatedAt": "2023-09-15T06:41:26.002Z",
    "deletedAt": null,
    "category": {
      "id": "35f503d0-4311-4d12-8c61-82a0f20568e5",
      "name": "Kits",
      "description": "Description 1",
      "createdAt": "2023-09-15T06:52:14.021Z",
      "updatedAt": "2023-09-15T06:52:14.021Z",
      "deletedAt": null
    }
  }];

  const [cartItems, setCartItems] = useState(formatCartItems(cartItemsApiResponse));
  const totalPrice = useMemo(() => (
    cartItems?.reduce((a, b) => a + Math.abs(b.price * b.quantity), 0)
  ), [cartItems]);

  const totalDiscountPrice = useMemo(() => (
    cartItems?.reduce((a, b) => a + Math.abs(b.price * b.quantity * .9), 0)
  ), [cartItems]);

  const onUpdateQty = (updatedItem, isIncrement) => {
    const updatedItemIndex = cartItems?.findIndex((item) => item?.id === updatedItem?.id);
    const updatedCartItems = [...cartItems];
    if (updatedItemIndex > -1) {
      if (isIncrement) {
        updatedCartItems[updatedItemIndex] = {
          ...updatedCartItems[updatedItemIndex],
          quantity: updatedCartItems[updatedItemIndex]?.quantity + 1
        }
      } else if (updatedCartItems[updatedItemIndex]?.quantity > 1) {
        updatedCartItems[updatedItemIndex] = {
          ...updatedCartItems[updatedItemIndex],
          quantity: updatedCartItems[updatedItemIndex]?.quantity - 1
        }
      } else if (updatedCartItems[updatedItemIndex]?.quantity === 1) {
        updatedCartItems.splice(updatedItemIndex, 1);
      }
      setCartItems(updatedCartItems);
    }
  }

  return (
    <div className={styles.cartLayoutWrapper}>
      <Header
        hasSearch
        hasMenu
        title="Cart(3)"
        titleCenter
      />
      <div className={styles.cartLayoutBody}>
        <div className={styles.mainTab}>
          <Button
            variant="contained"
            disableElevation
            sx={[
              buttonStyles.button,
              selectedTab === "equipments"
                ? buttonStyles.primary
                : buttonStyles.secondary,
            ]}
            onClick={() => setSelectedTab("equipments")}
          >
            Equipments(2)
          </Button>
          <Button
            variant="contained"
            disableElevation
            sx={[
              buttonStyles.button,
              selectedTab === "green-market"
                ? buttonStyles.primary
                : buttonStyles.secondary,
            ]}
            onClick={() => setSelectedTab("green-market")}
          >
            GreenMarket(1)
          </Button>
        </div>

        <div className={styles.addressContainer}>
          <div className={styles.boldText}>Deliver to</div>
          <div className={styles.addressValueContainer}>
            <div className={styles.left}>
              <div className={styles.namePin}>Sherlock, 682037</div>
              <div className={styles.rest}>32/A DLF NTH, Kakkanad, Thrikkakara</div>
            </div>
            <div className={styles.changeButton}>
              <Button
                variant="contained"
                disableElevation
                sx={[
                  buttonStyles.button,
                  buttonStyles.change
                ]}
                onClick={() => setSelectedTab("green-market")}
              >
                Change
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.cartItemsList}>
          {cartItems?.length > 0 && cartItems?.map((cartItem) => (
            <div className={styles.cartItemContainer}>
              <ProductCard
                product={{
                  id: cartItem?.id,
                  manufacture: 'TASHI',
                  name: cartItem?.name,
                  starRating: 4,
                  totalReviews: 28,
                  actualPrice: cartItem?.price,
                  currentPrice: Math.abs((cartItem?.price) * .9),
                  quantity: cartItem?.quantity
                }}
                showQuantity
                showSaveForLater
                onQtyDecrease={() => onUpdateQty(cartItem, false)}
                onQtyIncrease={() => onUpdateQty(cartItem, true)}
              />
            </div>
          ))}
        </div>

        <div className={styles.priceBreakDownContainer}>
          <div className={styles.boldText}>
            Price breakdown
          </div>
          <div className={styles.summaryList}>
            <div className={styles.summaryItem}>
              <div className={styles.left}>
                Price ({cartItems?.length} Items)
              </div>
              <div className={styles.right}>
                ₹{totalPrice}
              </div>
            </div>
            <div className={styles.summaryItem}>
              <div className={styles.left}>
                Discount
              </div>
              <div className={`${styles.right} ${styles.greenText}`}>
                - ₹{totalPrice - totalDiscountPrice}
              </div>
            </div>
            <div className={styles.summaryItem}>
              <div className={styles.left}>
                Delivery Charges
              </div>
              <div className={`${styles.right} ${styles.greenText}`}>
                <s className={styles.greyText}>
                  ₹400
                </s>
                &nbsp;Free delivery
              </div>
            </div>
          </div>
        </div>
        <div className={styles.checkoutFooter}>
          <div className={styles.left}>
            <s className={`${styles.greyText} ${styles.totalDiscountPrice}`}>₹{totalPrice}</s>
            <span className={styles.totalPrice}>₹{totalDiscountPrice}</span>
          </div>
          <Button
            sx={{
              backgroundColor: '#2D8304',
              color: '#ffffff',
              borderRadius: '40px',
              padding: '14px 25px',
              fontFamily: 'Rubik',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#2D8304',
                color: '#ffffff',
              }
            }}
          >Place order</Button>
        </div>
      </div>
    </div>
  )
}

export default CartLayout