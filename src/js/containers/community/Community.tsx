import React, { useEffect, useState } from "react";
import styles from "./styles.scss";
import PostComponent from "app/components/post-component/PostComponent";
import { dummyPosts } from "app/components/post-component/constants";
import Header from "app/components/header/Header";
import CommunityHeader from "./components/community-header/CommunityHeader";
import { COMMUNITY_TABS, COMMUNITY_TABS_NAMES } from "./constants";
import Forum from "./components/forum/Forum";

const Community = () => {
  const [selectedTab, setSelectedTab] = useState(COMMUNITY_TABS[0]);

  const handleTabSelection = (tab) => {
    setSelectedTab(tab);
  };
  useEffect(() => {
    const chatBotElement = document.getElementById('chat-bot');
    if (chatBotElement) {
      chatBotElement.style.display = 'none';
    }
    return ()=>{
      if (chatBotElement) {
        chatBotElement.style.display = 'block';
      }
    }
  }, []); 


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
        <div className={styles.addNewPost}>+</div>
      )}
    </div>
  );
};

export default Community;
