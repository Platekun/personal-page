import styled from '@emotion/styled';

import { breakpoints, COLORS } from '../../@theme';
import { TicomLogo, NativAppsLogo } from '../../@components/@atoms';

export const WorkExperiencesList = styled.ul`
  max-width: 794px;
  margin: 0 auto;
`;

export const Experience = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  ${breakpoints.md} {
    height: 200px;
    display: grid;
    grid-template-columns: 1fr 5px 1fr;
    grid-column-gap: 32px;
  }

  img {
    width: 80%;

    ${breakpoints.md} {
      width: 100%;
    }
  }
`;

export const WorkPlaceLogoContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpoints.md} {
    max-width: 275px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  ${breakpoints.lg} {
    max-width: 332px;
  }
`;

function makePastExperienceLogo(logo) {
  return styled(logo)`
    filter: grayscale(100%);
    opacity: 0.4;
    max-width: 355px;
  `;
}

export const PastTicomLogo = makePastExperienceLogo(TicomLogo);
export const PastNativAppsLogo = makePastExperienceLogo(NativAppsLogo);

export const PresentExperienceLogo = styled.div`
  width: 166px;
  height: 166px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 5px solid ${COLORS.PRIMARY};

  img {
    width: 96px;
  }
`;

export const ExperienceDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  opacity: ${({ present }) => (!present ? 0.4 : 1)};
`;

export const JobTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 12px;
`;

export const EmploymentPeriod = styled.p`
  font-size: 16px;
`;
