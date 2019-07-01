import styled from '@emotion/styled';

import { space, breakpoints } from '../../../@theme';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 0;

  ${breakpoints.md} {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: ${space(4)}px;
    grid-row-gap: ${space(4)}px;
  }
`;
