import styled from '@emotion/styled';

import { breakpoints, space } from '../../../@theme';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  margin-bottom: ${space(8)}px;

  ${breakpoints.md} {
    margin-bottom: 0;
  }

  svg {
    max-width: 70px;
    height: unset;

    ${breakpoints.md} {
      max-width: unset;
    }
  }
`;
