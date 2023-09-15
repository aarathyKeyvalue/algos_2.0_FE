import React from "react";
import styles from "./styles.scss";
import PostComponent from "app/components/post-component/PostComponent";
import { dummyPosts } from "app/components/post-component/constants";
import Header from "app/components/header/Header";

const Community = () => {
  return (
    <div className={styles.communityContainer}>
      <Header
        titleCenter
        hasSearch
        hasMenu
        title={<div className={styles.header}>Community</div>}
      />

      <div className={styles.optionsContainer}>Options</div>
      <div className={styles.posts}>
        {dummyPosts.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostComponent post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
