import styled from '@emotion/styled';
import { NavHashLink as HashLink } from 'react-router-hash-link';

import { space, COLORS } from '../../../@theme';

export const Link = styled(HashLink)`
  font-weight: bold;
  text-decoration: none;
  transition: ease 0.3s color;

  &:hover {
    color: ${COLORS.ACCENT};
  }

  @media screen and (min-width: 940px) {
    font-size: ${space(4)}px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${space(6)}px;
  }
`;
