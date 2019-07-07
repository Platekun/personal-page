import React from 'react';
import { css } from '@emotion/core';

export function HiddenUpMd({ children }) {
  return (
    <div
      css={css`
        @media screen and (min-width: 768px) {
          display: none;
        }
      `}
    >
      {children}
    </div>
  );
}
