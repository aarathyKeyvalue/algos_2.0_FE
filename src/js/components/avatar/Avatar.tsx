import React from "react";
import Avatar from "@mui/material/Avatar";
import styles from "./styles.scss";

const CustomAvatar = ({
  src = "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2459&q=80",
  children = null,
  width = 32,
  height = 32,
  showName = false,
  name = "Toa Mayek",
  description = "India",
}) => {
  return (
    <div className={styles.avatarContainer}>
      <Avatar src={src} sx={{ width, height }} alt={name}>
        {children}
      </Avatar>
      {showName && (
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
