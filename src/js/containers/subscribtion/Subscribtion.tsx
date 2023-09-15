import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from './styles.scss';

const Subscribtion = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate('/app');
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
    <div className={styles.subscribtionContainer}>
      <img
        className={styles.urban}
        src="assets/svg/app/urbanBotanica.svg"
      />
      <div className={styles.title}>
      Subscribe to our premium plans
      </div>
      <div className={styles.subTitle}>
      Unlock the full potential of  farming journey from the comfort of your home with our premium subscription plans.
      </div>
      <div className={styles.title}>
      Benefits
      </div>
      <div className={styles.benefits}>
        <div className={styles.eachBenefit}>
          <img src="assets/svg/app/star.svg" />
          <div>Curated farming kit suggestions</div>
        </div>
        <div className={styles.eachBenefit}>
          <img src="assets/svg/app/star.svg" />
          <div>Personalised crop suggestion</div>
        </div>
        <div className={styles.eachBenefit}>
          <img src="assets/svg/app/star.svg" />
          <div>Access to premium community</div>
        </div>
        <div className={styles.eachBenefit}>
          <img src="assets/svg/app/star.svg" />
          <div>Exclusive discounts</div>
        </div>
        <div className={styles.eachBenefit}>
          <img src="assets/svg/app/star.svg" />
          <div>Plant growth monitoring</div>
        </div>
        <div className={styles.eachBenefit}>
          <img src="assets/svg/app/star.svg" />
          <div>Expert 1-1 consultations</div>
        </div>
        <div className={styles.eachBenefit}>
          <img src="assets/svg/app/star.svg" />
          <div>24x7 Assistance</div>
        </div>
      </div>
      <div className={styles.title}>
      Checkout our subscription plans
      </div>
      <div className={styles.pack}>
        <img src="assets/svg/app/starter.svg" onClick={goToHome} />
        <img src="assets/svg/app/professional.svg" onClick={goToHome} />
      </div>
      <div className={styles.willDo}>
        <img src="assets/svg/app/willDoLater.svg" />
      </div>
    </div>
  )
}

export default Subscribtion;