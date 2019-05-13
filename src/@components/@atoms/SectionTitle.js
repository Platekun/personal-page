import styled from '@emotion/styled';

import { COLORS, space, breakpoints } from '../../@theme';

export const SectionTitle = styled.h2`
  color: ${COLORS.PRIMARY};
  text-align: center;
  font-size ${space(7)}px;
  margin-bottom: ${space(12)}px;

  ${breakpoints.md} {
    font-size ${space(9)}px;
  }

  @media screen and (min-width: 940px) and (min-height: 1024px) {
    font-size ${space(11)}px;
  }

  ${breakpoints.xl} {
    font-size ${space(11)}px;
  }
`;
