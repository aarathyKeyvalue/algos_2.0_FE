import React from "react";
import styles from './styles.scss';

const SiteItem = (props) => {
  const {
    name,
    refreshTime,
    plantCount,
    temp,
    waterLevel,
    humidity
  } = props;

  return (
    <div className={styles.siteItemContainer}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>{name}</div>
          <div className={styles.subTitle}>Tashin Pro. Data refreshed {refreshTime}</div>
        </div>
        <div className={styles.goTo}>
          <img src="assets/svg/app/right-arrow.svg" />
        </div>
      </div>
      <div className={styles.sections}>
        <div className={styles.section}>
          <div className={styles.plants}>
            <div className={styles.details}>
              <div className={styles.detailsHeader}>Plants</div>
              <div className={styles.detailsValue}>{plantCount}</div>
            </div>
            <div className={styles.tiltedImage}>
              <img src="assets/svg/garden/cabbage.svg" />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.temperature}>
            <div className={styles.details}>
              <div className={styles.detailsHeader}>Temperature</div>
              <div className={styles.detailsValue}>{temp}&deg;C</div>
            </div>
            <div className={styles.image}>
              <img src="assets/svg/garden/temp.svg" />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.waterLevel}>
            <div className={styles.details}>
              <div className={styles.detailsHeader}>Water level</div>
              <div className={styles.detailsValue}>{waterLevel} Ltrs</div>
            </div>
            <div className={styles.image}>
              <img src="assets/svg/garden/watering_can.svg" />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.water}>
            <div className={styles.details}>
              <div className={styles.detailsHeader}>Humidity</div>
              <div className={styles.detailsValue}>{humidity}%</div>
            </div>
            <div className={styles.image}>
              <img src="assets/svg/garden/water.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}