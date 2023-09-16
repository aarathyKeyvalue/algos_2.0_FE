import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.scss";
import CustomAvatar from "../avatar/Avatar";
import CustomImageList from "../image-list/ImageList";
import { Action_Buttons, Action_Types } from "./constants";
import { ImageListItem, Modal } from "@mui/material";
import {
  useCreatePostMutation,
  useLikePostMutation,
  useUnlikePostMutation,
} from "app/containers/shop/apiSlice";
import Input from "../input/Input";
import CreatePost from "app/containers/create-post/CreatePost";

const PostComponent = ({ post }: { post?: any }) => {
  const postContent = useRef(null);
  const [showReadMore, setShowReadMore] = useState(false);
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const [openImageUrl, setOpenImageUrl] = useState<any>(null);
  const [comment, setComment] = useState("");
  const [showCommentInput, setShowCommentInput] = useState(false);

  const [likePostquery] = useLikePostMutation();
  const [unlikePostquery] = useUnlikePostMutation();
  const [createPostQuery] = useCreatePostMutation();

  useEffect(() => {
    if (postContent.current) {
      const postElem = postContent.current as HTMLDivElement;
      if (postElem.offsetHeight > 54) {
        setShowReadMore(true);
      } else {
        const postParentElem = document.getElementById(
          `${post.id}-text-wrapper`
        );
        if (postParentElem) {
          postParentElem.style.height = "fit-content";
        }
      }
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
    if (showReadMore) {
      unlikePostquery({ postId: post.id, userId: "" });
    } else {
      likePostquery({ postId: post.id, userId: "" });
    }
    return null;
  };

  const handleComment = () => {
    setShowCommentInput(true);
  };

  const handleShare = () => {
    return null;
  };

  const handleSave = () => {
    return null;
  };

  const toggleReadMore = () => {
    const postParentElem = document.getElementById(`${post.id}-text-wrapper`);
    if (postParentElem) {
      if (isTextExpanded) {
        postParentElem.style.height = "50px";
        setIsTextExpanded(false);
      } else {
        postParentElem.style.height = "auto";
        setIsTextExpanded(true);
      }
    }
  };

  return (
    <div className={styles.postContainer} key={post.id}>
      <div className={styles.avatar}>
        <CustomAvatar
          src={post?.user?.avatar}
          name={post?.user?.name}
          description={post?.user?.email}
          showName={true}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textWrapper} id={`${post.id}-text-wrapper`}>
          <div className={styles.text} ref={postContent}>
            {post.content}
          </div>
        </div>
        {showReadMore && (
          <div
            className={styles.readMore}
            onClick={toggleReadMore}
            role="presentation"
          >
            {isTextExpanded ? "Read Less" : "Read More..."}
          </div>
        )}
      </div>
      {post.images && post.images.length > 0 && (
        <div className={styles.imageContainer}>
          <CustomImageList
            imageList={post.images}
            onImageClick={(image) => setOpenImageUrl(image?.src)}
          />
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
        {post?.comments?.length > 0 && (
          <>
            <div className={styles.separator}>
              <img src={"assets/svg/community/dotSeparator"} alt="" />
            </div>
            <div className={styles.repliesText}>
              {`${post.comments.length} Repl${
                post.comments.length === 1 ? "y" : "ies"
              }`}
            </div>
          </>
        )}
      </div>
      <div className={styles.replyContainer}>
        {post?.comments?.length > 0 &&
          post.comments.map((comment) => (
            <div className={styles.reply} key={comment.id}>
              <CustomAvatar name="" src={comment?.user[0]?.avatar} />
              <div>{comment.content}</div>
            </div>
          ))}
      </div>
      <Modal
        open={openImageUrl}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={styles.imageViewModal}>
          <div className={styles.imageViewHeader}>
            <img
              src="assets/svg/close-icon-black.svg"
              alt=""
              style={{ cursor: "pointer" }}
              onClick={() => setOpenImageUrl(null)}
            />
          </div>
          <div className={styles.imageViewBody}>
            <img src={openImageUrl} className={styles.image} alt="" />
          </div>
        </div>
      </Modal>

      {showCommentInput && (
        <Modal open={true}>
          <div>
            <CreatePost
              isComment={true}
              postId={post.id}
              title="Create Comment"
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default PostComponent;
