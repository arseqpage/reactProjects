import PropTypes from 'prop-types';
import clsx from 'classnames';

import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';
import imgLightSide from './img/light-side.jpg';
import imgDarkSide from './img/dark-side.jpg';
import imgFalconSide from './img/falcon.jpg';

import styles from './ChooseSide.module.css';

const ChooseSideItem = ({ theme, text, img, classes }) => {
  const isTheme = useTheme();

  return (
    <div className={clsx(styles.item, classes)} onClick={() => isTheme.change(theme)}>
      <span className={styles.item__header}>{text}</span>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  );
};

ChooseSideItem.propTypes = {
  classes: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
};

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: 'Light Side',
      img: imgLightSide,
      classes: styles.item__light,
    },
    {
      theme: THEME_DARK,
      text: 'Dark Side',
      img: imgDarkSide,
      classes: styles.item__dark,
    },
    {
      theme: THEME_NEUTRAL,
      text: 'Neutral',
      img: imgFalconSide,
      classes: styles.item__neutral,
    },
  ];

  return (
    <div className={styles.container}>
      {elements.map((elem, i) => (
        <ChooseSideItem
          classes={elem.classes}
          theme={elem.theme}
          text={elem.text}
          img={elem.img}
          key={i}
        />
      ))}
    </div>
  );
};

export default ChooseSide;
