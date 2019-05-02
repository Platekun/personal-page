import styled from '@emotion/styled';

import { breakpoints } from '../../../@theme';
import { JoystickIcon as Icon } from '../icons';

export const JoystickIcon = styled(Icon)`
  max-width: 40px;

  ${breakpoints.md.up} {
    max-width: calc(80px / 1.5);
  }

  ${breakpoints.lg.up} {
    max-width: calc(80px / 1.2);
  }

  ${breakpoints.xl.up} {
    max-width: 80px;
  }
`;
