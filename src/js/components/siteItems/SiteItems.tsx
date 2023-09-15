import React from "react";
import SiteItem from "app/components/site-item-card/SiteItem";

import styles from './styles.scss';

const SiteItems = () => {
  return (
    <div className={styles.content}>
        <div className={styles.eachContent}>
        <SiteItem
          name="Living Room"
          humidity="83"
          waterLevel="20 "
          temp="27"
          plantCount="7"
        />
        </div>
        <div className={styles.eachContent}>
        <SiteItem
          name="Living Room"
          humidity="83"
          waterLevel="20 "
          temp="27"
          plantCount="7"
        />
        </div>
        <div className={styles.eachContent}>
        <SiteItem
          name="Living Room"
          humidity="83"
          waterLevel="20 "
          temp="27"
          plantCount="7"
        />
        </div>
        <div className={styles.eachContent}>
        <SiteItem
          name="Living Room"
          humidity="83"
          waterLevel="20 "
          temp="27"
          plantCount="7"
        />
        </div>
        <div className={styles.eachContent}>
        <SiteItem
          name="Living Room"
          humidity="83"
          waterLevel="20 "
          temp="27"
          plantCount="7"
        />
        </div>
      </div>
  )
}

export default SiteItems;