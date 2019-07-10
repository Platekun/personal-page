import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import clsx from 'clsx';

import styles from './Link.module.css';

export function Link({ className, ...rest }) {
  return <GatsbyLink className={clsx([styles.link, className])} {...rest} />;
}
