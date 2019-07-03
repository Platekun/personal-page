import styled from '@emotion/styled';

import { Section as SectionBase } from '../Section';
import { COLORS, space, breakpoints } from '../../../@theme';

export const Section = styled(SectionBase)`
  max-width: unset !important;
  background-color: ${COLORS.PRIMARY};

  ${breakpoints.md} {
    background-color: unset;
    margin-top: ${space(8)}px;
    margin-bottom: ${space(8)}px;

    &::before {
      background-color: ${COLORS.PRIMARY};
      content: '';
      position: absolute;
      top: -50px;
      left: 0;
      width: 100%;
      height: calc(100% + 100px);
      clip-path: polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%);
    }
  }
`;
