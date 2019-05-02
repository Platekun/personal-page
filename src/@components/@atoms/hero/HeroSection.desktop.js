import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Section } from '../Section';
import { space, breakpoints } from '../../../@theme';

const common = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DesktopSection = styled(Section)`
  height: 100vh;
  min-height: 700px;
  margin-bottom: ${space(30)}px;

  @media screen and (min-width: 1200px) {
    margin: 0 auto;
  }

  ${breakpoints.tallDevice} {
    ${common}
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;
