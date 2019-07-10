import React from 'react';
import clsx from 'clsx';

import styles from './Important.module.css';

export function Important({ className, children, ...rest }) {
  return (
    <strong className={clsx([styles.important, className])} {...rest}>
      {children}
    </strong>
  );
}
