import React from "react";
import { Carousel } from "react-responsive-carousel";
import { products } from "../../containers/shop/data";

const OfferCarousal = (props) => {
  return (
    <Carousel
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      centerMode
      centerSlidePercentage={97}
      emulateTouch
    >
      {products.map((product) => (
        <div style={{ width: "100%", height: "160px" }}>
          <div
            style={{
              width: "97%",
              height: "100%",
              backgroundColor: "gray",
              borderRadius: "10px",
            }}
          ></div>
        </div>
      ))}
    </Carousel>
  );
};

export default OfferCarousal;
