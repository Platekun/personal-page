import styled from '@emotion/styled';

import { FullHeightSection } from '../FullHeightSection';
import { COLORS, space } from '../../../@theme';

export const MobileSection = styled(FullHeightSection)`
  background-color: ${COLORS.PRIMARY};
  padding: ${space(9)}px ${space(8)}px;
  position: relative;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-items: center;
  border-bottom-right-radius: 200px;
`;
