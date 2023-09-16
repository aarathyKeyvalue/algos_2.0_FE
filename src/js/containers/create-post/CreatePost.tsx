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
      images: [
        "https://images.unsplash.com/photo-1615671524827-c1fe3973b648?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1518931169559-527a99b4074d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        "https://images.unsplash.com/photo-1642433689275-5b369f1caf48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2330&q=80",
      ],
    });
  };

  return (
    <div className={styles.createPostWrapper}>
      <Header hasBack title={title} handleBack={onBackClick} />
      <div className={styles.createPostContainer}>
        <CustomAvatar width={42} height={42} showName={true} />
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
