import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Button({ onClick, className, outline, children }) {
  return (
    <button
      onClick={onClick}
      className={clsx('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
};
