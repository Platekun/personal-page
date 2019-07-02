import styled from '@emotion/styled';

import { breakpoints } from '../../../@theme';

export const ListItem = styled.li`
  display: flex;
  justify-content: center;

  ${breakpoints.sm} {
    align-items: center;
  }

  svg {
    max-width: 73px;

    ${breakpoints.md} {
      max-width: unset;
    }
  }
`;
