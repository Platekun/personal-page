import styled from '@emotion/styled';

import { space } from '../../../@theme';

export const CallToAction = styled.div`
  display: none;
  position: absolute;
  bottom: ${space(9)}px;
  transform: translateX(-50%);
  left: 50%;
  animation-name: glow;
  animation-duration: 3s;
  animation-iteration-count: infinite;

  @media screen and (min-height: 600px) {
    display: block;
  }

  @keyframes glow {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;
