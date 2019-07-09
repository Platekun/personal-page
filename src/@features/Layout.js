import React from 'react';
import { css } from '@emotion/core';

import { globalStyles } from '../@theme';
import BackgroundImage from './background.svg';
import { SEO } from '../@features';

export function Layout(props) {
  return (
    <>
      <SEO />

      {globalStyles}

      <main
        css={css`
          background-image: url(${BackgroundImage});
          background-size: cover;
        `}
        {...props}
      />
    </>
  );
}
