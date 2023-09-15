import React, { useEffect} from "react";
import styles from './styles.scss';
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 2000)
  }, [])

  return (
    <div className={styles.imageContainer}>
      <img src="assets/svg/app/appIcon.svg" className={styles.image} />
    </div>
  )
}

export default SplashScreen;