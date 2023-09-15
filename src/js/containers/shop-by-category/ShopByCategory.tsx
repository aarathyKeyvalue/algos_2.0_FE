import React, { useEffect, useState } from "react";

import Category from "app/components/category/Category";
import ProductCard from "app/components/ProductCard/ProductCard";
import styles from "./styles.scss";
import Header from "app/components/header/Header";
import { categories, products } from "./data";
import { useSearchParams } from "react-router-dom";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category");

    setSelectedCategory(`${category}`);
  }, []);

  return (
    <div className="scroll-wrapper">
      <Header hasSearch hasCart hasBack title="Shop by category" />
      <div className={styles.container}>
        <div className={styles.categories}>
          {categories.map((category) => (
            <div style={{ marginRight: 20 }}>
              <Category
                image={category.image}
                size={50}
                label={category.label}
                isSelected={selectedCategory === category.label}
                onSelect={() => {
                  setSelectedCategory(category.label);
                  setSearchParams({ "category": category.label });
                }}
              />
            </div>
          ))}
        </div>
        <div style={{ height: "calc(100vh - 280px)", overflowY: "auto" }}>
          {products.map((product) => (
            <ProductCard
              product={{
                name: "The Tashi Junior",
                manufacture: "TASHI",
                starRating: 3,
                totalReviews: 20,
                currentPrice: "599.00",
                actualPrice: "799.00",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
