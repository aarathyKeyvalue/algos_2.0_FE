import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.scss";
import Header from "app/components/header/Header";
import { useNavigate } from "react-router-dom";
import CustomAvatar from "app/components/avatar/Avatar";
import Input from "app/components/input/Input";
import muiStyles from "app/containers/shop/styles";
import Button from "@mui/material/Button";
import { useCreatePostMutation } from "../shop/apiSlice";

const CreatePost = ({
  isComment = false,
  postId = "",
  title = "Create Post",
}) => {
  const navigate = useNavigate();
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const [createPostQuery, { isSuccess: createPostSuccess }] =
    useCreatePostMutation();

  useEffect(() => {
    if (createPostSuccess) {
      navigate("/app/community");
    }
  }, [createPostSuccess]);

  const onBackClick = () => {
    navigate("/app/community");
  };

  const handleImageUpload = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleImageSelection = (e) => {
    if (e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const onCreatePost = () => {
    createPostQuery({
      content,
      isPost: !isComment,
      userId: "e7c9fcd7-561b-4b50-b296-8ae8c3929e9d",
      ...(isComment && { parentId: postId }),
    });
  };

  return (
    <div className={styles.createPostWrapper}>
      <Header hasBack title={title} handleBack={onBackClick} />
      <div className={styles.createPostContainer}>
        <CustomAvatar width={42} height={42} />
        <div className={styles.createPostInput}>
          <Input
            content={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What do you want to share today..."
          />
        </div>
      </div>
      <div className={styles.createPostFooter}>
        <div
          className={styles.uploadImage}
          onClick={handleImageUpload}
          role="presentation"
        >
          <img
            src="assets/svg/community/imageIcon.svg"
            width={25}
            height={25}
          />
          <input
            type="file"
            ref={imageInputRef}
            style={{ display: "none" }}
            accept="image/png, image/gif, image/jpeg"
            onChange={handleImageSelection}
            multiple={false}
          />
        </div>
        <div>
          <Button
            variant="contained"
            disableElevation
            sx={[
              muiStyles.button,
              content.length > 0 ? muiStyles.primary : muiStyles.secondary,
              muiStyles.postButton,
            ]}
            disabled={content.length === 0}
            onClick={onCreatePost}
            className={styles.postButton}
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
