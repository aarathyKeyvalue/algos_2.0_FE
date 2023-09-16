import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';

import Header from 'app/components/header/Header';
import muiStyles from 'app/containers/shop/styles';
import SiteItems from 'app/components/siteItems/SiteItems';
import Plants from 'app/components/plants/Plants';

import mui from './styles';
import { ACTIONS, MY_PLANTS, MY_SITES, TYPES } from './constants';
import styles from './styles.scss';
import { useGetAllPlantsQuery } from 'app/services/garden';
import Actions from '../actions/Actions';

const Garden = () => {
  const [selectedTab, setSelectedTab] = useState(MY_SITES);
  const { data: plants, isLoading} = useGetAllPlantsQuery('');
  if (isLoading) {
    return <div
    className="loader"
    >
      <CircularProgress />
      </div>
  }
  return (
    <div className={styles.gardenContainer}>
      <Header hasMenu title="My Garden" titleCenter hasSearch />
      <div className={styles.buttonGroup}>
        {TYPES.map((button) => (
          <div className={styles.eachButton}>
            <Button
              variant="contained"
              disableElevation
              sx={[
                mui.button,
                selectedTab === button.id
                  ? muiStyles.primary
                  : muiStyles.secondary
              ]}
              onClick={() => setSelectedTab(button.id)}
            >
              {button.name}
            </Button>
          </div>
        ))}
      </div>
      {selectedTab === MY_SITES && <SiteItems />}
      {selectedTab === MY_PLANTS && <Plants data={plants} />}
      {selectedTab === ACTIONS && <Actions />}
    </div>
  );
};

export default Garden;
