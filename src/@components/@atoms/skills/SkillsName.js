import styled from '@emotion/styled';

import { breakpoints, space } from '../../../@theme';
import { Parragraph } from '../Parragraph';

export const Name = styled(Parragraph)`
  max-width: ${space(86)}px;
  text-align: center;
  margin-top: ${space(4)}px;
  margin-bottom: 0;

  ${breakpoints.md} {
    margin-top: ${space(10)}px;
  }
`;
