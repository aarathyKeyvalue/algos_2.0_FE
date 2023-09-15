import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "./styles.scss";
import { COMMUNITY_TABS } from "../../constants";
import Category from "app/components/category/Category";

const CommunityHeader = ({ onSelectTab, selectedTab }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTabs}>
        {COMMUNITY_TABS.map((tab) => (
          <div className={styles.category}>
            <Category
              key={tab.name}
              image={tab.src}
              label={tab.name}
              isSelected={selectedTab.name === tab.name}
              onSelect={() => onSelectTab(tab)}
              size={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityHeader;
