import styled from '@emotion/styled';

import { breakpoints, space } from '../../../@theme';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: ${space(13)}px;
  margin-top: 0;
  margin-bottom: 0;

  ${breakpoints.sm} {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: ${space(17)}px;
    grid-row-gap: unset;
    max-width: 509px;
    margin-right: auto;
    margin-left: auto;
  }
`;
