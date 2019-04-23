import styled from '@emotion/styled';

import { space, zIndex } from '../../../@theme';

export const HamburgerContainer = styled.div`
  position: absolute;
  top: ${space(4)}px;
  left: ${space(4)}px;
  z-index: ${zIndex.NAVIGATION};
`;
