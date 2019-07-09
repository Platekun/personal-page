import { Link as LinkBase } from 'gatsby';
import styled from '@emotion/styled';

import { space, COLORS, breakpoints } from '../../@theme';

export const Link = styled(LinkBase)`
  font-weight: bold;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease 0.3s color;

  &:hover {
    color: ${COLORS.ACCENT};
  }

  ${breakpoints.lg} {
    font-size: ${space(4)}px;
  }

  ${breakpoints.xl} {
    font-size: ${space(5)}px;
  }

  ${breakpoints.uw} {
    font-size: ${space(6)}px;
  }

  ${breakpoints.t1} {
    font-size: ${space(5)}px;
  }

  ${breakpoints.t3} {
    font-size: ${space(6)}px;
  }

  ${breakpoints.t4} {
    font-size: ${space(7)}px;
  }
`;
