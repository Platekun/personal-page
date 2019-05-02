import styled from '@emotion/styled';

import { space, breakpoints } from '../../../@theme';

export const GreetingContainer = styled.header`
  position: relative;
  bottom: ${space(22)}px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${breakpoints.tallDevice} {
    margin-top: ${space(20)}px;
    margin-bottom: ${space(40)}px;
    position: static;
    bottom: unset;
  }

  @media screen and (min-width: 1200px) {
    position: static;
    bottom: unset;
  }
`;
