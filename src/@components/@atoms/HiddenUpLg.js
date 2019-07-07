import React from 'react';
import { css } from '@emotion/core';

export function HiddenUpLg({ children }) {
  return (
    <div
      css={css`
        @media screen and (min-width: 940px) {
          display: none;
        }
      `}
    >
      {children}
    </div>
  );
}
