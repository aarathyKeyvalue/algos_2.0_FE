import React, { useState } from "react";
import Category from "app/components/category/Category";
import ProductCard from "app/components/product-card/ProductCard";
import styles from "./styles.scss";
import { Box, Button } from "@mui/material";
import muiStyles from "./styles";
import { categories, products } from "./data";
import Header from "app/components/header/Header";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].label);

  return (
    <div className="scroll-wrapper">
      <Header hasMenu titleCenter hasSearch title="Shop" />
      <div className={styles.container}>
        <div className={styles.category}>
          <div className={styles.categories}>
            {categories.map((category) => (
              <div style={{ marginRight: 20 }}>
                <Category
                  image={category.image}
                  size={50}
                  label={category.label}
                  isSelected={selectedCategory === category.label}
                  onSelect={() => setSelectedCategory(category.label)}
                />
              </div>
            ))}
          </div>
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
