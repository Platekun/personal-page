import styled from '@emotion/styled';

import { Section } from '../Section';
import { COLORS, space } from '../../../@theme';

export const MobileSection = styled(Section)`
  background-color: ${COLORS.PRIMARY};
  padding: ${space(9)}px ${space(8)}px;
  border-bottom-right-radius: 200px;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-items: center;
`;
