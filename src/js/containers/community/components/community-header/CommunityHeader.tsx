import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "./styles.scss";
import { COMMUNITY_TABS } from "../../constants";
import Category from "app/components/category/Category";

const CommunityHeader = () => {
  const [selectedTab, setSelectedTab] = useState(COMMUNITY_TABS[0]);

  const handleTabSelection = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className={styles.headerContainer}>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        emulateTouch
      >
        {COMMUNITY_TABS.map((tab) => (
          <Category
            key={tab.name}
            image={tab.src}
            label={tab.name}
            isSelected={selectedTab.name === tab.name}
            onSelect={() => handleTabSelection(tab)}
            size={50}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CommunityHeader;
