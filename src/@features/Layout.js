import React from 'react';
import { css } from '@emotion/core';

import { globalStyles } from '../@theme';
import BackgroundImage from './background.svg';
import { SEO } from '../@features';
import { MobileNavigation, DesktopNavigation } from '../@components/@organisms';

export function Layout(props) {
  return (
    <>
      <SEO />

      {globalStyles}

      <div
        css={css`
          @media screen and (min-width: 940px) {
            display: none;
          }
        `}
        query="(max-width: 939px)"
      >
        <MobileNavigation />
      </div>

      <div
        css={css`
          display: none;

          @media screen and (min-width: 940px) {
            display: block;
          }
        `}
      >
        <DesktopNavigation />
      </div>

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
