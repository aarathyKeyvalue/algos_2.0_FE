import React, { useEffect, useState} from "react";
import styles from './styles.scss';
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [showSignIn, toggleShowSignIn] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => toggleShowSignIn(true), 2000);
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
    <div className={styles.imageContainer}>
      <img src="assets/svg/app/appIcon.svg" className={styles.image} />
      {showSignIn && (
        <div className={styles.signIn} onClick={() => navigate('/subscribtion')}>
          <img src="assets/svg/app/google.svg" />
          <img src="assets/svg/app/phone.svg" />
        </div>
      )}
    </div>
  )
}

export default SplashScreen;