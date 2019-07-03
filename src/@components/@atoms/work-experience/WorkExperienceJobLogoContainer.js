import styled from '@emotion/styled';

import { breakpoints, space } from '../../../@theme';

export const JobLogoContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpoints.md} {
    max-width: ${space(68)}px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  ${breakpoints.lg} {
    max-width: ${space(83)}px;
  }
`;
