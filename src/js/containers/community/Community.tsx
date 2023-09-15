import React, { useState } from "react";
import styles from "./styles.scss";
import PostComponent from "app/components/post-component/PostComponent";
import { dummyPosts } from "app/components/post-component/constants";
import Header from "app/components/header/Header";
import CommunityHeader from "./components/community-header/CommunityHeader";
import { COMMUNITY_TABS, COMMUNITY_TABS_NAMES } from "./constants";
import Forum from "./components/forum/Forum";
import { useNavigate } from "react-router-dom";

const Community = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(COMMUNITY_TABS[0]);

  const handleTabSelection = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className={styles.communityContainer}>
      <Header
        titleCenter
        hasSearch
        hasMenu
        title={<div className={styles.header}>Community</div>}
      />

      <div className={styles.optionsContainer}>
        <CommunityHeader
          onSelectTab={handleTabSelection}
          selectedTab={selectedTab}
        />
      </div>
      <div className={styles.communityContent}>
        {selectedTab.name === COMMUNITY_TABS_NAMES.FORUM && <Forum />}
      </div>
      {selectedTab.name === COMMUNITY_TABS_NAMES.FORUM && (
        <div
          className={styles.addNewPost}
          onClick={() => {
            navigate("/create-post");
          }}
        >
          +
        </div>
      )}
    </div>
  );
};

export default Community;
