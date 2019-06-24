import styled from '@emotion/styled';

import { breakpoints } from '../../../@theme';

export const DesktopIllustrationContainer = styled.div`
  max-width: 530px;
  width: 45%;

  @media screen and (min-width: 1200px) and (max-height: 1023px) {
    width: unset;
  }

  ${breakpoints.t3} {
    max-width: unset;
    width: unset;
  }
`;
