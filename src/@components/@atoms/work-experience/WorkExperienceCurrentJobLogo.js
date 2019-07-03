import styled from '@emotion/styled';

import { COLORS, space } from '../../../@theme';

export const CurrentJobLogo = styled.div`
  width: 166px;
  height: 166px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 5px solid ${COLORS.PRIMARY};

  svg {
    width: ${space(24)}px;
  }
`;
