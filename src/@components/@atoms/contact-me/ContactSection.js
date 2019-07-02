import styled from '@emotion/styled';

import { Section as SectionBase } from '../Section';
import { breakpoints } from '../../../@theme';

export const Section = styled(SectionBase)`
  ${breakpoints.sm} {
    height: 300px;
    min-height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  ${breakpoints.md} {
    height: 600px;
    min-height: 50vh;
  }
`;
