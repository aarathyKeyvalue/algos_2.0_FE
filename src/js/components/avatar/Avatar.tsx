import React from "react";
import Avatar from "@mui/material/Avatar";
import styles from "./styles.scss";

const CustomAvatar = ({
  src = "",
  children = null,
  width = 32,
  height = 32,
  name = "",
  description = "",
}) => {
  return (
    <div className={styles.avatarContainer}>
      <Avatar src={src} sx={{ width, height }} alt={name}>
        {children}
      </Avatar>
      {name && (
        <div className={styles.avatarNameContainer}>
          <div className={styles.avatarName}>{name}</div>
          {description && (
            <div className={styles.avatarDesc}>{description}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomAvatar;
