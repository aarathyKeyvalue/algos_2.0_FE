import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.scss";
import CustomAvatar from "../avatar/Avatar";
import CustomImageList from "../image-list/ImageList";
import { Action_Buttons, Action_Types } from "./constants";

const PostComponent = ({ post }: { post?: any }) => {
  const postContent = useRef(null);
  const [showReadMore, setShowReadMore] = useState(false);

  useEffect(() => {
    if (postContent.current) {
      const postElem = postContent.current as HTMLDivElement;
      setShowReadMore(true);
    }
  }, [postContent.current]);

  const handleActionClick = (actionType: Action_Types) => {
    switch (actionType) {
      case Action_Types.LIKE:
        toggleLike();
        break;
      case Action_Types.COMMENT:
        handleComment();
        break;
      case Action_Types.SHARE:
        handleShare();
        break;
      case Action_Types.SAVE:
        handleSave();
        break;
    }
  };

  const toggleLike = () => {
    return null;
  };

  const handleComment = () => {
    return null;
  };

  const handleShare = () => {
    return null;
  };

  const handleSave = () => {
    return null;
  };

  return (
    <div className={styles.postContainer}>
      <div className={styles.avatar}>
        <CustomAvatar
          src={post.author.src}
          name={post.author.name}
          description={post.author.place}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textWrapper}>
          <div className={styles.text} ref={postContent}>
            {post.content}
          </div>
        </div>
        {showReadMore && <div className={styles.readMore}>Read More...</div>}
      </div>
      {post.images.length > 0 && (
        <div className={styles.imageContainer}>
          <CustomImageList imageList={post.images} />
        </div>
      )}
      <div className={styles.actionsContainer}>
        <div className={styles.actionButtons}>
          {Action_Buttons.map((action) => (
            <div
              className={styles.action}
              onClick={() => handleActionClick(action.id)}
            >
              <img src={action.inactiveIcon} />
            </div>
          ))}
        </div>
        <div className={styles.separator}>
          <img src={"assets/svg/community/dotSeparator"} alt="" />
        </div>
        <div className={styles.repliesText}>21 Replies</div>
      </div>
      <div className={styles.replyContainer}>
        <div className={styles.reply}>
          <CustomAvatar />
          <div>
            Its really hard to find one answer from this I think. The boring
            answer is, it torally depends on the product. Some business markets
            work almost the same (e-shops, blogs, content-creation/selling) and
            some work.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
