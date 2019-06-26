import styled from '@emotion/styled';

import { space, breakpoints } from '../../../@theme';

export const JobTitle = styled.h4`
  font-size: ${space(5)}px;
  margin-bottom: ${space(3)}px;

  ${breakpoints.lg} {
    font-size: ${space(7)}px;
  }
`;
