import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";

import styles from "./styles.scss";
import Header from "app/components/header/Header";
import OfferCarousal from "app/components/offer-carousal/OfferCarousal";
import ArticleCard from "app/components/article-card/ArticleCard";
import { offers, products } from "../shop/data";
import ProductCard from "app/components/product-card/ProductCard";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="scroll-wrapper">
      <Header
        titleCenter
        hasSearch
        hasMenu
        title={
          <img
            className={styles.urban}
            src="assets/svg/app/urbanBotanica.svg"
          />
        }
      />
      <div className={styles.container}>
        <div style={{ fontWeight: 300, fontSize: 14 }}>
          Welcome back,
          <div style={{ fontWeight: 600, fontSize: 16, marginTop: 4 }}>
            Sherlock
          </div>
        </div>
        <div
          style={{
            marginTop: 16,
            display: "flex",
            gap: 10,
            height: 137,
            marginBottom: 24,
          }}
        >
          <div
          onClick={() => navigate('/profile')}
            style={{
              width: 137,
              height: "100%",
              border: "1px solid #DBEEFF",
              backgroundColor: "#F3F7FF",
              borderRadius: "10px",
              padding: "18px 10px",
              cursor: 'pointer'
            }}
          >
            <div
              style={{
                height: 65,
                width: 65,
                borderRadius: "50%",
                backgroundColor: "white",
                overflow: "hidden",
              }}
            >
              <img
                src="assets/img/profile.png"
                alt=""
                width={65}
                style={{ marginTop: 4 }}
              />
            </div>
            <div
              style={{
                fontWeight: 600,
                fontSize: 12,
                marginTop: 10,
                color: "#1d1d1d",
              }}
            >
              Professional
              <div
                style={{
                  fontWeight: 300,
                  fontSize: 10,
                  marginTop: 2,
                  color: "rgb(97 97 97)",
                  fontStyle: "italic",
                }}
              >
                Subscribed till Jan 2024
              </div>
            </div>
          </div>

          <div style={{ width: "calc(100% - 137px)" }}>
            <div style={{ display: "flex", gap: 10 }}>
              <div
                style={{
                  width: "50%",
                  height: 63,
                  backgroundColor: "#F9FFFF",
                  border: "1px solid #E0FFFD",
                  borderRadius: "10px",
                  padding: 10,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: 12 }}>Sites</div>
                  <div style={{ fontSize: 20, fontWeight: 600, marginTop: 4 }}>
                    3
                  </div>
                </div>
                <img
                  src="assets/img/sites.png"
                  alt=""
                  width={33}
                  style={{ marginTop: 10 }}
                />
              </div>
              <div
                style={{
                  width: "50%",
                  height: 63,
                  backgroundColor: "#FBFFF9",
                  border: "1px solid #E6FFDB",
                  borderRadius: "10px",
                  padding: 10,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: 12 }}>Plants</div>
                  <div style={{ fontSize: 20, fontWeight: 600, marginTop: 4 }}>
                    24
                  </div>
                </div>
                <img
                  src="assets/img/plant.png"
                  alt=""
                  width={33}
                  style={{ marginTop: 10 }}
                />
              </div>
            </div>
            <div
              style={{
                marginTop: 10,
                width: "100%",
                height: 63,
                backgroundColor: "#FFFFF9",
                border: "1px solid #FFF6DE",
                borderRadius: "10px",
                padding: 10,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ fontSize: 12 }}>Carbon footprint reduced</div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 300,
                    marginTop: 4,
                    color: "#2D8304",
                  }}
                >
                  <span
                    style={{ fontSize: 20, fontWeight: 700, marginRight: 4 }}
                  >
                    1.80
                  </span>
                  Tons of CO
                </div>
              </div>
              <img
                src="assets/img/smiley.png"
                alt=""
                width={33}
                height={33}
                style={{ position: 'relative', top: 12 }}
              />
            </div>
          </div>
        </div>

        <OfferCarousal offers={offers} />
        <div
          className={styles.category}
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 28,
            marginBottom: 15,
          }}
        >
          <div className={styles.sectionTitle}>Community Articles</div>
          <img src="assets/svg/shop/arrow-right.svg" alt="" width={20} />
        </div>

        <Carousel
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          centerMode
          centerSlidePercentage={85}
        >
          {products.map((product) => (
            <div style={{ width: "95%",  }}>
              <ArticleCard />
            </div>
          ))}
        </Carousel>

        <div
          className={styles.category}
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 28,
            marginBottom: 15,
          }}
        >
          <div className={styles.sectionTitle}>New in shop</div>
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

export default Home;
