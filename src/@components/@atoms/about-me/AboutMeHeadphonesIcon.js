import styled from '@emotion/styled';

import { breakpoints } from '../../../@theme';
import { HeadphonesIcon as Icon } from '../icons';

export const HeadphonesIcon = styled(Icon)`
  max-width: 40px;

  ${breakpoints.md} {
    max-width: calc(96px / 1.5);
  }

  ${breakpoints.lg} {
    max-width: calc(96px / 1.2);
  }

  ${breakpoints.xl} {
    max-width: 96px;
  }
`;
