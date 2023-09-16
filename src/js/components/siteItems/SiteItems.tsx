import React from "react";
import { useNavigate } from "react-router-dom";

import SiteItem from "app/components/site-item-card/SiteItem";

import styles from './styles.scss';
import { useGetAllSitesQuery } from "app/services/garden";

const SiteItems = () => {
  const navigate = useNavigate();
  const onSiteClick = (id) => navigate(`/site/${id}`);

  const { data } = useGetAllSitesQuery('');
  return (
    <div className={styles.content}>
      {data?.map((details) => (
        <div className={styles.eachContent} onClick={() => onSiteClick(details.id)}>
          <SiteItem
            details={details}
          />
        </div>
      ) )}
      </div>
  )
}

export default SiteItems;