import React, { useEffect, useState } from "react";

import Category from "app/components/category/Category";
import ProductCard from "app/components/ProductCard/ProductCard";
import styles from "./styles.scss";
import Header from "app/components/header/Header";
import { categories, products } from "./data";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  useGetCategoriesQuery,
  useLazyGetProductsQuery,
} from "../shop/apiSlice";
import Loader from "app/components/loader";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const { data, isLoading } = useGetCategoriesQuery({});
  const [getProducts, { data: productsData, isLoading: isProductsLoading }] =
    useLazyGetProductsQuery({});

  useEffect(() => {
    const category = searchParams.get("category");

    setSelectedCategory(`${category}`);
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      getProducts([selectedCategory]);
    }
  }, [selectedCategory]);

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  console.log(productsData);

  return (
    <div className="scroll-wrapper">
      <Loader isLoading={isLoading || isProductsLoading} />
      <Header hasSearch hasCart hasBack title="Shop by category" />
      <div className={styles.container}>
        <div className={styles.categories}>
          {data?.data?.map((category) => (
            <div style={{ marginRight: 20 }}>
              <Category
                image={category.image}
                size={50}
                label={category.name}
                isSelected={selectedCategory === category.id}
                onSelect={() => {
                  setSelectedCategory(category.id);
                  navigate(`/app/shop-by-category?category=${category.id}`, {
                    replace: true,
                  });
                }}
              />
            </div>
          ))}
        </div>
        {productsData?.data?.length === 0 && (
          <div style={{ width: "100%", textAlign: "center", marginTop: 100 }}>
            No products in this category
          </div>
        )}

        <div style={{ height: "calc(100vh - 280px)", overflowY: "auto" }}>
          {productsData?.data?.map((product) => (
            <ProductCard
              product={{
                name: product.name,
                manufacture: "TASHI",
                starRating: randomIntFromInterval(1, 5),
                totalReviews: randomIntFromInterval(10, 90),
                currentPrice: product.price * 0.9,
                actualPrice: product.price,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
