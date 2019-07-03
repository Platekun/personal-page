import styled from '@emotion/styled';

import { breakpoints } from '../../../@theme';

export const SectionContent = styled.div`
  position: relative;
  z-index: 2;

  ${breakpoints.lg} {
    display: grid;
    grid-template-rows: auto 1fr;
    width: 100%;
    height: 600px;
    min-height: 50vh;
  }
`;
