import styled from '@emotion/styled';

import { Parragraph } from '../Parragraph';
import { breakpoints, space } from '../../../@theme';

export const Message = styled(Parragraph)`
  text-align: center;
  marign-bottom: ${space(11)}px;

  ${breakpoints.sm} {
    display: none;
  }
`;
