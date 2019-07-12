import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Hidden.module.css';

const hiddenClass = {
  up: {
    md: styles.hiddenUpMd,
    lg: styles.hiddenUpLg
  },
  down: {
    md: styles.hiddenDownMd,
    lg: styles.hiddenDownLg
  }
};

export function Hidden({ type, bp, className, children, ...rest }) {
  return (
    <div className={clsx([hiddenClass[type][bp], className])} {...rest}>
      {children}
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Hidden.propTypes = {
    type: PropTypes.string,
    bp: PropTypes.string
  };
}
