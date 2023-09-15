import React, { useEffect } from "react";
import Header from "app/components/header/Header";
import styles from './styles.scss';

const Profile = () => {
  useEffect(() => {
    const chatBotElement = document.getElementById('chat-bot');
    if (chatBotElement) {
      chatBotElement.style.display = 'none';
    }
    return ()=>{
      if (chatBotElement) {
        chatBotElement.style.display = 'block';
      }
    }
  }, []); 
  return (
    <div className={styles.profileContainer}>
      <Header hasBack />
      <div className={styles.profileImage}>
        <img src="assets/img/profile_big.png" />
      </div>
      <div className={styles.profileName}>Sherlock</div>
      <div className={styles.sections}>
      <div className={styles.eachSection}>
          <div className={styles.professionalContainer}>
          <div className={styles.professional}>
            <img src="assets/svg/app/star_white.svg" />
            <span>Professional</span>
          </div>
          <div className={styles.subs}>Subscribed till Jan 2024</div>
          </div>
          <div className={styles.manage}>
            <span>Manage</span>
            <img src="assets/svg/app/right-arrow.svg" />
          </div>
        </div>
      <div className={styles.eachSection}>
          <div className={styles.details}>
            <div>Personal info</div>
            <div className={styles.personal}>
              <img src="assets/svg/app/phone_light.svg" />
              <div>+91 8891919922</div>
            </div>
            <div className={styles.personal}>
              <img src="assets/svg/app/mail_light.svg" />
              <div>sherlock@gmail.com</div>
            </div>
          </div>
          <div className={styles.manage}>
            <span>Manage</span>
            <img src="assets/svg/app/right-arrow.svg" />
          </div>
        </div>
        <div className={styles.eachSection}>
          <div>Connected devices</div>
          <div className={styles.manage}>
            <span>Manage</span>
            <img src="assets/svg/app/right-arrow.svg" />
          </div>
        </div>
        <div className={styles.eachSection}>
          <div>Saved addressess</div>
          <div className={styles.manage}>
            <span>Manage</span>
            <img src="assets/svg/app/right-arrow.svg" />
          </div>
        </div>
        <div className={styles.eachSection}>
          <div>Payment details</div>
          <div className={styles.manage}>
            <span>Manage</span>
            <img src="assets/svg/app/right-arrow.svg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;