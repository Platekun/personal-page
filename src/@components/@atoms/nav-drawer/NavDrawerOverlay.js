import styled from '@emotion/styled';

import { zIndex } from '../../../@theme';

export const DrawerOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${zIndex.NAVIGATION_DRAWER_OVERLAY};
`;
