import styled from '@emotion/styled';

import { breakpoints } from '../../../@theme';

export const CoreValues = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 348px;
  margin: 0 auto;

  ${breakpoints.md.up} {
    max-width: 50%;
  }

  ${breakpoints.lg.up} {
    height: unset;
    margin: unset;
    max-width: unset;
    width: 100%;
    display: block;
  }
`;
