import React, { useState } from "react";
import styles from "./styles.scss";
import PostComponent from "app/components/post-component/PostComponent";
import { dummyPosts } from "app/components/post-component/constants";

const Forum = () => {
  return (
    <div className={styles.forumContainer}>
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

export default Forum;
