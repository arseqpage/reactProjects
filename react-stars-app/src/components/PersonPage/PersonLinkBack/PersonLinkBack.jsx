import { useHistory } from 'react-router-dom';

import styles from './PersonLinkBack.module.css';
import arrowBack from './img/back.svg';

const PersonLinkBack = () => {
  const history = useHistory();

  const handleGoBack = (e) => {
    e.preventDefault();

    history.goBack();
  };

  return (
    <a href="#" onClick={handleGoBack} className={styles.link}>
      <img className={styles.link__img} src={arrowBack} alt="Go back" />
      <span className={styles.link__back}>Go Back</span>
    </a>
  );
};

export default PersonLinkBack;
