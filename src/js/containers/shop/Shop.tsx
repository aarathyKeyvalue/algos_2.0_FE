import React from "react";
import Category from "app/components/category/Category";
import ProductCard from "app/components/product-card/ProductCard";
import styles from "./styles.scss";
import { Box, Button } from "@mui/material";
import muiStyles from "./styles";
import { categories, products } from "./data";
import Header from "app/components/header/Header";

const Shop = () => {
  return (
    <div>
      <Header hasMenu titleCenter hasSearch title="Shop" />
      <div className={styles.container}>
        <div className={styles.mainTab}>
          <Button
            variant="contained"
            disableElevation
            sx={[muiStyles.button, muiStyles.primary]}
            onClick={() => null}
          >
            Equipments
          </Button>
          <Button
            variant="contained"
            disableElevation
            sx={[muiStyles.button, muiStyles.secondary]}
            onClick={() => null}
          >
            GreenMarket
          </Button>
        </div>
        <div className={styles.category}>
          <div className={styles.sectionTitle} style={{ marginBottom: 14 }}>
            Purchase by category
          </div>
          <div className={styles.categories}>
            {categories.map((category) => (
              <div style={{ marginRight: 20 }}>
                <Category
                  image={category.image}
                  size={60}
                  label={category.label}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className={styles.category}
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 28,
            marginBottom: 15,
          }}
        >
          <div className={styles.sectionTitle}>Purchase by category</div>
          <img src="assets/svg/shop/arrow-right.svg" alt="" width={20} />
        </div>
        <div className={styles.categories}>
          {products.map((product) => (
            <div style={{ marginRight: 18 }}>
              <ProductCard image={product.image} name="pH Down Solution" />
            </div>
          ))}
        </div>

        <div
          className={styles.category}
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 28,
            marginBottom: 15,
          }}
        >
          <div className={styles.sectionTitle}>Seed suggetions</div>
          <img src="assets/svg/shop/arrow-right.svg" alt="" width={20} />
        </div>
        <div className={styles.categories}>
          {products.map((product) => (
            <div style={{ marginRight: 18 }}>
              <ProductCard image={product.image} name="pH Down Solution" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
