import PropTypes from 'prop-types';
import clsx from 'classnames';

import '../index.css';
import styles from './UiButton.module.css';

const UiButton = ({ text, onClick, disabled, theme = 'dark', classes }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(styles.button, styles[theme], classes)}>
      {text}
    </button>
  );
};

UiButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
  classes: PropTypes.string,
};

export default UiButton;
