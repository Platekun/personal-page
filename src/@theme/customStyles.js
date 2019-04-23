import { css } from '@emotion/core';

import { COLORS } from './colors';

export const customStyles = css`
  ul {
    padding-left: none;
  }

  li {
    list-style-type: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  span,
  p,
  q,
  blockquote,
  address,
  i,
  u,
  strike,
  tt,
  small,
  center,
  em,
  strong {
    font-family: 'Helvetica Neue', Helvetica, sans-serif, Arial;
    color: ${COLORS.TEXT_PRIMARY};
    margin: 0;
  }
`;
