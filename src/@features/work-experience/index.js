import React from 'react';
import { css } from '@emotion/core';

import { MobileWorkExperience } from './WorkExperience.mobile';
import { DesktopWorkExperience } from './WorkExperience.desktop';

export function WorkExperience({ appBarVariant }) {
  return (
    <>
      <div
        css={css`
          @media screen and (min-width: 768px) {
            display: none;
          }
        `}
      >
        <MobileWorkExperience appBarVariant={appBarVariant} />
      </div>

      <div
        css={css`
          display: none;

          @media screen and (min-width: 768px) {
            display: block;
          }
        `}
      >
        <DesktopWorkExperience />
      </div>
    </>
  );
}
