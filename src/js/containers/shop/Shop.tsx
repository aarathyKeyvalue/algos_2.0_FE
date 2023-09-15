import React, { useState } from "react";
import Category from "app/components/category/Category";
import ProductCard from "app/components/product-card/ProductCard";
import styles from "./styles.scss";
import { Box, Button } from "@mui/material";
import muiStyles from "./styles";
import { categories, products, shopOffers } from "./data";
import Header from "app/components/header/Header";
import Loader from "app/components/loader";
import { useNavigate } from "react-router-dom";
import OfferCarousal from "app/components/offer-carousal/OfferCarousal";
import { useGetCategoriesQuery } from "./apiSlice";

const Shop = () => {
  const [selectedTab, setSelectedTab] = useState("equipments");
  const navigate = useNavigate();

  const { data, isLoading } = useGetCategoriesQuery({});

  return (
    <div className="scroll-wrapper">
      <Loader isLoading={isLoading} />
      <Header hasMenu titleCenter hasSearch title="Shop" />
      <div className={styles.container}>
        <div className={styles.mainTab}>
          <Button
            variant="contained"
            disableElevation
            sx={[
              muiStyles.button,
              selectedTab === "equipments"
                ? muiStyles.primary
                : muiStyles.secondary,
            ]}
            onClick={() => setSelectedTab("equipments")}
          >
            Equipments
          </Button>
          <Button
            variant="contained"
            disableElevation
            sx={[
              muiStyles.button,
              selectedTab === "green-market"
                ? muiStyles.primary
                : muiStyles.secondary,
            ]}
            onClick={() => setSelectedTab("green-market")}
          >
            GreenMarket
          </Button>
        </div>

        <OfferCarousal offers={shopOffers} />

        <div className={styles.category}>
          <div className={styles.sectionTitle} style={{ marginBottom: 14 }}>
            Purchase by category
          </div>
          <div className={styles.categories}>
            {data?.data?.map((category) => (
              <div style={{ marginRight: 20 }}>
                <Category
                  image={category.image}
                  size={60}
                  label={category.name}
                  onSelect={() =>
                    navigate(`/app/shop-by-category?category=${category.id}`, { replace: true })
                  }
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
              <ProductCard
                image={product.image}
                name={product.name}
                offerPrize={product.offerPrize}
                prize={product.prize}
              />
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
              <ProductCard
                image={product.image}
                name={product.name}
                offerPrize={product.offerPrize}
                prize={product.prize}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
