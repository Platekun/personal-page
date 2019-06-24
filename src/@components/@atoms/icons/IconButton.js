import styled from '@emotion/styled';

import { COLORS } from '../../../@theme';

export const IconButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:active path,
  &:active ellipse {
    fill: ${COLORS.ACCENT};
  }
`;
