import React, { useState } from "react";
import styles from "./styles.scss";
import PostComponent from "app/components/post-component/PostComponent";
import { useGetAllPostsQuery } from "app/containers/shop/apiSlice";

const Forum = () => {
  const { data } = useGetAllPostsQuery({});

  return (
    <div className={styles.forumContainer}>
      <div className={styles.posts}>
        {data?.data?.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostComponent post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
