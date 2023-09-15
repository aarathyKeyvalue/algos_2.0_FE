import React from 'react'
import styles from './styles.scss';

const ArticleCard = () => {
  const article = {
    imageUrl: 'https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2814&q=80',
    type: 'STORY',
    date: '23 Feb',
    title: 'How hydroponics saved a village from cancer',
    description: 'Grow any green leafy VEGETABLES (like Lettuce, Spinach, Basil, Mint, etc) HERBS (like Oregano, Thyme, etc) and SALADS easily.'
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