import React from 'react';
import { css } from '@emotion/core';

import { DesktopHero } from './Hero.desktop';
import { MobileHero } from './Hero.mobile';

export function Hero({ appBarVariant }) {
  return (
    <>
      <div
        css={css`
          @media screen and (min-width: 940px) {
            display: none;
          }
        `}
      >
        <MobileHero appBarVariant={appBarVariant} />
      </div>

      <div
        css={css`
          display: none;

          @media screen and (min-width: 940px) {
            display: block;
          }
        `}
      >
        <DesktopHero />
      </div>
    </>
  );
}
