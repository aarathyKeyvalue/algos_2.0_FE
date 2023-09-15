import React, { useState } from "react";
import { Button } from "@mui/material";

import Header from "app/components/header/Header";

import muiStyles from 'app/containers/shop/styles';
import mui from './styles';
import { MY_PLANTS, MY_SITES, TYPES } from "./constants";
import styles from './styles.scss';
import SiteItems from "app/components/siteItems/SiteItems";

const Garden = () => {

  const [selectedTab, setSelectedTab] = useState(MY_SITES);
  return (
    <div className={styles.gardenContainer}>
      <Header hasMenu title="My Garden" titleCenter  hasSearch/>
      <div className={styles.buttonGroup}>
      {TYPES.map((button) => <div className={styles.eachButton}><Button
            variant="contained"
            disableElevation
            sx={[
              mui.button,
              selectedTab === button.id
                ? muiStyles.primary
                : muiStyles.secondary,
            ]}
            onClick={() => setSelectedTab(button.id)}
          >
            {button.name}
          </Button></div>)}
      </div>
      {selectedTab === MY_SITES && <SiteItems />}
    </div>
  )
}

export default Garden;