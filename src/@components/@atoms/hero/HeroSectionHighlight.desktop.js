import styled from '@emotion/styled';

import { space, breakpoints } from '../../../@theme';

export const DesktopSectionHighlight = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    margin-bottom: ${space(10)}px;
  }

  ${breakpoints.tallDevice} {
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    margin-bottom: 0;
  }
`;
