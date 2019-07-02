import styled from '@emotion/styled';

import { SectionTitle } from '../SectionTitle';
import { breakpoints, space } from '../../../@theme';

export const Title = styled(SectionTitle)`
  ${breakpoints.md} {
    margin-bottom: ${space(20)}px;
  }
`;
