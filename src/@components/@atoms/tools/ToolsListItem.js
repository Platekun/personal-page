import styled from '@emotion/styled';

import { space, breakpoints } from '../../../@theme';

export const ListItem = styled.li`
  margin-top: ${space(4)}px;
  margin-bottom: ${space(4)}px;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  ${breakpoints.md} {
    margin-top: 0;
    margin-bottom: 0;
  }

  svg {
    max-width: 94px;

    ${breakpoints.xl} {
      max-width: unset;
    }
  }
`;

export const ListItemWithLargeLogo = styled(ListItem)`
  svg {
    max-width: 160px;

    ${breakpoints.xl} {
      max-width: unset;
    }
  }
`;
