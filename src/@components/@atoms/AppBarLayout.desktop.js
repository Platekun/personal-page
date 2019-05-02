import styled from '@emotion/styled';

import { COLORS, zIndex } from '../../@theme';

export const DesktopAppBarLayout = styled.header`
  background-color: ${COLORS.WHITE};
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${COLORS.GRAY};
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.NAVIGATION};
`;
