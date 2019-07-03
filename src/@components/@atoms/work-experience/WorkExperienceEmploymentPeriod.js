import styled from '@emotion/styled';

import { space, breakpoints } from '../../../@theme';

export const EmploymentPeriod = styled.p`
  font-size: ${space(4)}px;
  font-weight: 300;

  ${breakpoints.lg} {
    font-size: ${space(6)}px;
  }
`;
