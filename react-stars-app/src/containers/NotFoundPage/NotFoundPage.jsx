import { useLocation } from 'react-router-dom';

import styles from './NotFoundPage.module.css';
import NotfoundImg from './img/notfound.png';

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <>
      <img className={styles.img} src={NotfoundImg} alt="Notfound" />
      <p className={styles.text}>
        No match for <u>{location.pathname}</u>
      </p>
    </>
  );
};

export default NotFoundPage;
