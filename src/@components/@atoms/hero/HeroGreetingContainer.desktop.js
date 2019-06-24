import styled from '@emotion/styled';

import { space, breakpoints } from '../../../@theme';

export const GreetingContainer = styled.header`
  // Starting from 940px
  position: relative;
  bottom: ${space(22)}px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (min-width: 1200px) and (max-height: 1023px) {
    position: static;
    bottom: unset;
  }

  ${breakpoints.t1} {
    position: static;
    bottom: unset;
    margin-top: ${space(20)}px;
    margin-bottom: ${space(20)}px;
  }

  ${breakpoints.t2} {
    margin-bottom: 0;
  }

  ${breakpoints.t3} {
    justify-content: center;
  }
`;
