import React from 'react';
import clsx from 'clsx';

import styles from './SectionTitle.module.css';

export function SectionTitle({ className, children, ...rest }) {
  return (
    <h2 className={clsx([styles.sectionTitle, className])} {...rest}>
      {children}
    </h2>
  );
}
