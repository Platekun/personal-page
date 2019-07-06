import React from 'react';
import { css } from '@emotion/core';

export function HiddenDownMd({ children }) {
  return (
    <div
      css={css`
        display: none;

        @media screen and (min-width: 768px) {
          display: block;
        }
      `}
    >
      {children}
    </div>
  );
}
