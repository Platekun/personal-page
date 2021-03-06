import styled from '@emotion/styled';

import { Section } from '../Section';
import { COLORS, space, breakpoints } from '../../../@theme';

const sectionHeight = 'calc(100vh - 60px)';

export const SectionLayout = styled(Section)`
  background-color: ${COLORS.PRIMARY};
  border-bottom-right-radius: 200px;
  padding: ${space(9)}px ${space(8)}px;
  position: relative;
  height: ${sectionHeight};
  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpoints.lg} {
    background-color: unset;
    height: unset;
    position: static;
    margin-bottom: ${space(15)}px;
    flex-direction: column;
    align-items: unset;
    justify-content: center;
  }

  @media screen and (min-width: 1200px) and (min-height: 800px) {
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1200px) and (max-height: 1023px) {
    height: ${sectionHeight};
    margin-right: auto;
    margin-left: auto;
  }

  ${breakpoints.t1} {
    margin-bottom: ${space(12)}px;
    align-items: center;
  }

  ${breakpoints.t2} {
    height: ${sectionHeight};
  }
`;
