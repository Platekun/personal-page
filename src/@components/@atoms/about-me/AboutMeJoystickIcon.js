import styled from '@emotion/styled';

import { breakpoints } from '../../../@theme';
import { JoystickIcon as Icon } from '../icons';

export const JoystickIcon = styled(Icon)`
  max-width: 40px;

  ${breakpoints.md} {
    max-width: calc(80px / 1.5);
  }

  ${breakpoints.lg} {
    max-width: calc(80px / 1.2);
  }

  ${breakpoints.xl} {
    max-width: 80px;
  }
`;
