import styled from '@emotion/styled';

import { breakpoints } from '../../../@theme';
import { BookIcon as Icon } from '../icons';

export const BookIcon = styled(Icon)`
  max-width: 33px;

  ${breakpoints.md.up} {
    max-width: calc(66px / 1.5);
  }

  ${breakpoints.xl.up} {
    max-width: 66px;
  }
`;
