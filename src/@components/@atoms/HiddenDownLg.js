import React from 'react';
import { css } from '@emotion/core';

export function HiddenDownLg({ children }) {
  return (
    <div
      css={css`
        display: none;

        @media screen and (min-width: 940px) {
          display: block;
        }
      `}
    >
      {children}
    </div>
  );
}
