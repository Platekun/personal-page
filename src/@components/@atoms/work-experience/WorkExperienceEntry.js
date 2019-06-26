import styled from '@emotion/styled';

import { breakpoints, space } from '../../../@theme';

export const Entry = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  ${breakpoints.md} {
    height: ${space(50)}px;
    display: grid;
    grid-template-columns: 1fr 5px 1fr;
    grid-column-gap: ${space(8)}px;
  }

  svg {
    width: 80%;

    ${breakpoints.md} {
      width: 100%;
    }
  }
`;
