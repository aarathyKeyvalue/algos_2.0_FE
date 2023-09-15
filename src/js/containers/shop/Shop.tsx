import React from "react";
import Category from "app/components/category/Category";
import styles from "./styles.scss";
import { Box, Button } from "@mui/material";
import muiStyles from "./styles";
import categories from "./categories";

const Shop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainTab}>
        <Button
          variant="contained"
          disableElevation
          sx={[muiStyles.button, muiStyles.primary]}
          onClick={() => null}
        >
          Equipments
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={[muiStyles.button, muiStyles.secondary]}
          onClick={() => null}
        >
          Equipments
        </Button>
      </div>
      <div className={styles.category}>
        <div className={styles.sectionTitle}>Purchase by category</div>
        <div className={styles.categories}>
          {categories.map((category) => (
            <div style={{ marginRight: 20 }}>

            <Category image={category.image} size={60} label={category.label} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
