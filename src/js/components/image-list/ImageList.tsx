import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import styles from "./styles.scss";

const CustomImageList = ({ imageList = [], onImageClick = (image: any) => { } }) => {
  return (
    <div className={styles.imageListContainer}>
      <ImageList cols={3} rowHeight={85}>
        {imageList.map((image: any) => (
          <ImageListItem key={image.src}>
            <img
              src={`${image.src}?w=85&h=85&auto=format`}
              alt={image.title}
              className={styles.image}
              onClick={() => onImageClick(image)}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default CustomImageList;
