import React from 'react';
import clsx from 'clsx';

import styles from './Section.module.css';

export function Section({ className, children, ...rest }) {
  return (
    <section className={clsx([styles.section, className])}>{children}</section>
  );
}
