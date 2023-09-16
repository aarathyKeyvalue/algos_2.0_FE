import React, { useEffect, useMemo, useState } from 'react'
import styles from './styles.scss';
import Header from 'app/components/header/Header';
import { Button } from '@mui/material';
import ProductCard from 'app/components/ProductCard/ProductCard';
import { formatCartItems } from './utils';
import { useGetCartQuery, useRemoveAllFromCartMutation } from 'app/services/home';

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

  const { data } = useGetCartQuery('');
  const [showSuccess, setSuccess] = useState<boolean>(false);
  const [trigger, { isSuccess }] = useRemoveAllFromCartMutation();

  const [cartItems, setCartItems] = useState(formatCartItems([]));
  const totalPrice = useMemo(() => (
    cartItems?.reduce((a, b) => a + Math.abs(b.product.price * b.quantity), 0)
  ), [cartItems]);
  useEffect(() => {
    const chatBotElement = document.getElementById('chat-bot');
    if (chatBotElement) {
      chatBotElement.style.display = 'none';
    }
    return ()=>{
      if (chatBotElement) {
        chatBotElement.style.display = 'block';
      }
    }
  }, []); 
  useEffect(() => {
    if (isSuccess) {
      setSuccess(isSuccess);
      setTimeout(() => setSuccess(false), 3000)
    }
  }, [isSuccess]);
  useEffect(() => {
    if (data?.cartItems) setCartItems(data?.cartItems)
}, [data])
  const totalDiscountPrice = useMemo(() => (
    cartItems?.reduce((a, b) => a + Math.abs(b.product.price * b.quantity * .9), 0)
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
        title={`Cart${data ? `(${data.length})` : ''}`}
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
            Equipments
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
            GreenMarket
          </Button>
        </div>

        {data?.cartItems?.length > 0 && <div className={styles.addressContainer}>
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
        </div>}

        <div className={styles.cartItemsList}>
          {data?.cartItems?.length > 0 && data?.cartItems?.map((cartItem) => (
            <div className={styles.cartItemContainer}>
              <ProductCard
                product={{
                  id: cartItem?.id,
                  manufacture: 'TASHI',
                  name: cartItem?.product?.name,
                  starRating: 4,
                  totalReviews: 28,
                  actualPrice: cartItem?.product?.price,
                  currentPrice: Math.abs((cartItem?.product?.price) * .9),
                  quantity: cartItem?.quantity,
                  image: cartItem?.product?.image
                }}
                showQuantity
                showSaveForLater
                onQtyDecrease={() => onUpdateQty(cartItem, false)}
                onQtyIncrease={() => onUpdateQty(cartItem, true)}
              />
            </div>
          ))}
        </div>

        {(data?.cartItems?.length > 0 && (
          <>
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
            onClick={() => trigger('6aa8aad1-e496-4ee8-a93f-0b35a8ee093f')}
          >Place order</Button>
        </div></>
        )) || (
          <div className={styles.emptyCart}>Your Cart is Empty</div>
        )}
      </div>
      {showSuccess && <div className={styles.success}>
        Order placed</div>}
    </div>
  )
}

export default CartLayout