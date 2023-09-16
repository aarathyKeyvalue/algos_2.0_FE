import React from "react";
import { Box, CircularProgress } from "@mui/material";
import styles from "./styles";

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <Box sx={styles.loaderWrapper} position="fixed">
      <CircularProgress size={60} />
    </Box>
  );
};

export default Loader;
