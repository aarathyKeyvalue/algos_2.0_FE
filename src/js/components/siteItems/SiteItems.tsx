import React from "react";
import { useNavigate } from "react-router-dom";

import SiteItem from "app/components/site-item-card/SiteItem";

import styles from './styles.scss';

const SiteItems = () => {
  const navigate = useNavigate();
  const onSiteClick = (id) => navigate(`/site/${id}`);
  return (
    <div className={styles.content}>
        <div className={styles.eachContent} onClick={() => onSiteClick(1)}>
        <SiteItem
          details={{
            name:"Living Room",
          humidity:"83",
          waterLevel:"20 ",
          temperature:"27",
          capacity:'10',
          plants:[{}, {}, {}]
          }}
        />
        </div>
        <div className={styles.eachContent} onClick={() => onSiteClick(1)}>
        <SiteItem
          details={{
            name:"Living Room",
          humidity:"83",
          waterLevel:"20 ",
          capacity:'10',
          temperature:"27",
          plants:[{}, {}, {}]
          }}
        />
        </div>
        <div className={styles.eachContent} onClick={() => onSiteClick(1)}>
        <SiteItem
          details={{
            name:"Living Room",
          humidity:"83",
          waterLevel:"20 ",
          capacity:'10',
          temperature:"27",
          plants:[{}, {}, {}]
          }}
        />
        </div>
        <div className={styles.eachContent} onClick={() => onSiteClick(1)}>
        <SiteItem
          details={{
            name:"Living Room",
          humidity:"83",
          waterLevel:"20 ",
          temperature:"27",
          capacity:'10',
          plants:[{}, {}, {}]
          }}
        />
        </div>
        <div className={styles.eachContent} onClick={() => onSiteClick(1)}>
        <SiteItem
          details={{
            name:"Living Room",
          humidity:"83",
          waterLevel:"20 ",
          temperature:"27",
          capacity:'10',
          plants:[{}, {}, {}]
          }}
        />
        </div>
      </div>
  )
}

export default SiteItems;