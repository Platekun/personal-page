import { css } from '@emotion/core';

import NeuzeitGroFont from './NeuzeitGro.ttf';
import { COLORS } from './colors';
import { breakpoints } from './breakpoints';

export const customStyles = css`
  @font-face {
    font-family: 'NeuzeitGro';
    src: url('./${NeuzeitGroFont}');
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ul {
    padding-left: 0;
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

  ${breakpoints.lg} {
    main {
      padding-top: 60px;
    }
  }
`;
