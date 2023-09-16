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
      <ImageList cols={3} rowHeight={200}>
        {imageList.map((image: any) => (
          <div key={image} style={{ width: "200px" }}>
            <img
              src={`${image}`}
              alt={image.title}
              className={styles.image}
              onClick={() => onImageClick(image)}
              width={200}
              height={200}
            />
          </div>
        ))}
      </ImageList>
    </div>
  );
};

export default CustomImageList;
