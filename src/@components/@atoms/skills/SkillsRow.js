import styled from '@emotion/styled';

import { breakpoints, space } from '../../../@theme';

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${space(8)}px;
  margin-bottom: ${space(8)}px;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  li {
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${breakpoints.md} {
    flex-direction: row;
    margin-top: ${space(12)}px;
    margin-bottom: ${space(12)}px;
  }
`;
