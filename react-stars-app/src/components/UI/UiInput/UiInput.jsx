import PropTypes from 'prop-types';
import clsx from 'classnames';

import icon from './img/cancel.svg';

import '../index.css';
import styles from './UiInput.module.css';

const UiInput = ({ value, handleChangeInput, placeholder, classes }) => (
  <div className={clsx(styles.wrapper__input, classes)}>
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={(e) => handleChangeInput(e.target.value)}
      placeholder={placeholder}
    />
    <img
      className={clsx(styles.clear, !value && styles.clear__disabled)}
      onClick={() => value && handleChangeInput('')}
      src={icon}
      alt="Clear input"
    />
  </div>
);

UiInput.propTypes = {
  value: PropTypes.string,
  handleChangeInput: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
};

export default UiInput;
