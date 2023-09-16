import React from "react";
import styles from './styles.scss';
import Item from "../item/Item";

const SiteItem = (props) => {
  const {
    details
  } = props;

  const {
    name,
    plants = [],
    temperature,
    waterLevel,
    humidity
  } = details;
  return (
    <div className={styles.siteItemContainer}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>{name}</div>
          <div className={styles.subTitle}>Tashin Pro. Data refreshed yesterday</div>
        </div>
        <div className={styles.goTo}>
          <img src="assets/svg/app/right-arrow.svg" />
        </div>
      </div>
      <div className={styles.sections}>
        <div className={styles.section}>
          <Item type="plants" style={`${styles.plants} ${styles.each}`}>
            <>
              <div className={styles.details}>
                <div className={styles.detailsHeader}>Plants</div>
                <div className={styles.detailsValue}>
                  {plants.length}
                  <span className={styles.capacity}>/10</span>
                </div>
              </div>
              <div className={styles.tiltedImage}>
                <img src="assets/svg/garden/cabbage.svg" />
              </div>
            </>
          </Item>
        </div>
        <div className={styles.section}>
          <Item type="temperature" style={`${styles.temperature} ${styles.each}`}>
            <>
              <div className={styles.details}>
                <div className={styles.detailsHeader}>Temperature</div>
                <div className={styles.detailsValue}>{temperature}&deg;C</div>
              </div>
              <div className={styles.image}>
                <img src="assets/svg/garden/temp.svg" />
              </div>
            </>
          </Item>
        </div>
        <div className={styles.section}>
          <Item type="waterLevel" style={`${styles.waterLevel} ${styles.each}`}>
            <>
              <div className={styles.details}>
                <div className={styles.detailsHeader}>Water level</div>
                <div className={styles.detailsValue}>{waterLevel} Ltrs</div>
              </div>
              <div className={styles.image}>
                <img src="assets/svg/garden/watering_can.svg" />
              </div>
            </>
          </Item>
        </div>
        <div className={styles.section}>
         <Item type="water" style={`${styles.water} ${styles.each}`}>
          <>
              <div className={styles.details}>
                <div className={styles.detailsHeader}>Humidity</div>
                <div className={styles.detailsValue}>{humidity}%</div>
              </div>
              <div className={styles.image}>
                <img src="assets/svg/garden/water.svg" />
              </div>
            </>
         </Item>
        </div>
      </div>
    </div>
  )
}

export default SiteItem;