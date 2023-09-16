import React from 'react'
import styles from './styles.scss';

const ArticleCard = () => {
  const article = {
    imageUrl: 'https://media.istockphoto.com/id/658291850/photo/young-plant-growing-in-sunlight.jpg?s=612x612&w=0&k=20&c=ZH9gmP8dLhwNaWuVbtBz99Fkybg_B0Uanw88QXSdMnY=',
    type: 'STORY',
    date: '23 Feb',
    title: 'Kerala’s biggest hydroponic farm to come up in Thiruvananthapuram',
    description: 'In a technology-driven farming initiative, Kerala Startup Mission (KSUM)-supported uFarms.io has extended its IoT farm automation system to Uptown Urban Farms Pvt Ltd to set up the state’s first and biggest automated hydroponic farm in the capital city.'
  }
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageContainer}>
        <img src={article?.imageUrl} className={styles.image} alt="" />
      </div>
      <div className={styles.cardDetailsContainer}>
        <div className={styles.infoTextContainer}>
          <div className={styles.greyText}>
            {article?.type}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5" fill="none">
            <circle cx="2" cy="2.12189" r="2" fill="black" fill-opacity="0.5" />
          </svg>
          <div className={styles.greyText}>
            {article?.date}
          </div>
        </div>
        <div className={styles.title}>
          {article?.title}
        </div>
        <div className={styles.description}>
          {article?.description}
        </div>
      </div>
    </div>
  )
}

export default ArticleCard