import styled from '@emotion/styled';

import { breakpoints } from '../../../@theme';
import { DumbellIcon as Icon } from '../icons';

export const DumbellIcon = styled(Icon)`
  max-width: 64px;

  ${breakpoints.md.up} {
    max-width: calc(129px / 1.5);
  }

  ${breakpoints.lg.up} {
    max-width: calc(129px / 1.2);
  }

  ${breakpoints.xl.up} {
    max-width: 129px;
  }
`;
