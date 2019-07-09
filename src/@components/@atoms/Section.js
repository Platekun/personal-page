import styled from '@emotion/styled';

import { space, breakpoints } from '../../@theme';

export const Section = styled.section`
  padding: ${space(8)}px;
  margin: 0 auto;
  max-width: 480px;
  position: relative;

  ${breakpoints.sm} {
    padding: ${space(8)}px ${space(12)}px;
    max-width: 768px;
  }

  ${breakpoints.md} {
    padding: ${space(8)}px ${space(16)}px;
    max-width: 940px;
  }

  ${breakpoints.lg} {
    max-width: 1264px;
  }

  ${breakpoints.xl} {
    padding-top: ${space(11)}px;
    padding-right: ${space(22)}px;
    padding-left: ${space(22)}px;
  }

  ${breakpoints.t1} {
    padding-top: ${space(8)}px;
    padding-bottom: ${space(8)}px;
  }
`;
