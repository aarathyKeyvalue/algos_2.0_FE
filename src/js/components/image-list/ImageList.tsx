import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import styles from "./styles.scss";

const CustomImageList = ({
  imageList = [],
  onImageClick = (image: any) => {},
}) => {
  return (
    <div className={styles.imageListContainer}>
      <ImageList cols={4} rowHeight={85}>
        {imageList.map((image: any) => (
          <div key={image.src} style={{ width: "85px" }}>
            <img
              src={`${image.src}`}
              alt={image.title}
              className={styles.image}
              onClick={() => onImageClick(image)}
              width={85}
              height={85}
            />
          </div>
        ))}
      </ImageList>
    </div>
  );
};

export default CustomImageList;
