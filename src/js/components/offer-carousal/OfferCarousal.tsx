import React from "react";
import { Carousel } from "react-responsive-carousel";

const OfferCarousal = (props) => {
  return (
    <Carousel
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      centerMode
      emulateTouch
      centerSlidePercentage={97}
      emulateTouch
      infiniteLoop
    >
      {props.offers.map((product) => (
        <div style={{ width: "100%", height: "160px" }}>
          <div
            style={{
              width: "97%",
              height: "100%",
              borderRadius: "10px",
            }}
          ><img src={product.image} style={{ borderRadius: '10px' }} /></div>
        </div>
      ))}
    </Carousel>
  );
};

export default OfferCarousal;
