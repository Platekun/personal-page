import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Parragraph.module.css';
import { space } from '../../../@theme';

export function Parragraph({ marginBottom, className, children, ...rest }) {
  return (
    <p
      className={clsx([styles.parragraph, className])}
      style={{
        marginBottom: marginBottom ? `${space(marginBottom)}px` : undefined
      }}
      {...rest}
    >
      {children}
    </p>
  );
}

if (process.env.NODE_ENV === 'development') {
  Parragraph.propTypes = {
    marginBottom: PropTypes.number
  };
}
