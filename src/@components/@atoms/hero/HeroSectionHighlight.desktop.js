import styled from '@emotion/styled';

import { space, breakpoints } from '../../../@theme';

export const DesktopSectionHighlight = styled.div`
  height: 95vh;
  padding-bottom: ${space(8)}px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 1200px) {
    margin-bottom: ${space(10)}px;
    height: unset;
    flex-direction: row;
  }

  ${breakpoints.t1} {
    margin-bottom: 0;
    padding-bottom: unset;
    flex-direction: column;
    justify-content: center;
  }

  ${breakpoints.t2} {
    height: 75%;
    justify-content: space-around;
  }
`;
