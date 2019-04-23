import styled from '@emotion/styled';

import { zIndex, COLORS } from '../../../@theme';

export const DrawerContainer = styled.nav`
  background-color: ${COLORS.WHITE};
  width: 265px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  transform: ${props =>
    props.visible ? 'transform: translateX(0);' : 'translateX(-100%)'};
  transition: ease 0.3s transform;
  z-index: ${zIndex.NAVIGATION_DRAWER};
`;
