import { useSelector } from 'react-redux';

import styles from './FavoritePage.module.css';

const FavoritePage = () => {
  const storeData = useSelector((store) => store.favoriteReducer);

  return <h1>FavoritePage</h1>;
};

export default FavoritePage;
