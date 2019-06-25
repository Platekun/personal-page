import React from 'react';
import styled from '@emotion/styled';

import { COLORS } from '../../@theme';
import { Section, SectionTitle, IdeawareLogo } from '../../@components/@atoms';
import {
  WorkExperiencesList,
  PastTicomLogo,
  PastNativAppsLogo,
  Experience,
  WorkPlaceLogoContainer,
  PresentExperienceLogo,
  ExperienceDetails,
  JobTitle,
  EmploymentPeriod
} from './common';

const Divider = styled.hr`
  width: 5px;
  border-radius: 5px;
  border: none;
  background-color: ${COLORS.PRIMARY};
  margin-top: 14px;
  margin-bottom: 14px;
  height: 75px;
  position: static;
  top: unset;
  transform: rotate(180deg);

  ${({ present }) =>
    !present
      ? ''
      : `
    height: 90px;
    position: relative;
    top: 16px;
  `}
`;

export function MobileWorkExperience() {
  return (
    <Section id="experience">
      <SectionTitle>Work Experience</SectionTitle>

      <Divider />

      <WorkExperiencesList>
        <Experience>
          <WorkPlaceLogoContainer href="http://ticom.co/wordpress/la-empresa">
            <PastTicomLogo />
          </WorkPlaceLogoContainer>

          <ExperienceDetails>
            <h3 hidden>Worked at TICOM S.A</h3>
            <JobTitle>Full Stack Developer</JobTitle>
            <EmploymentPeriod>Jan 2016 - Jul 2016</EmploymentPeriod>
          </ExperienceDetails>
        </Experience>

        <Divider />

        <Experience>
          <WorkPlaceLogoContainer href="https://nativapps.com/">
            <PastNativAppsLogo />
          </WorkPlaceLogoContainer>

          <ExperienceDetails>
            <h3 hidden>Worked at NativApps S.A.S</h3>
            <JobTitle>Back-End Developer</JobTitle>
            <JobTitle>Front-End Developer</JobTitle>
            <EmploymentPeriod>Feb 2017 - Mar 2018</EmploymentPeriod>
          </ExperienceDetails>
        </Experience>

        <Divider present />

        <Experience>
          <WorkPlaceLogoContainer href="http://ideaware.co">
            <PresentExperienceLogo>
              <IdeawareLogo />
            </PresentExperienceLogo>
          </WorkPlaceLogoContainer>

          <ExperienceDetails present>
            <h3 hidden>Currently working at Ideaware</h3>
            <JobTitle>Front-End Developer</JobTitle>
            <EmploymentPeriod>Jul 2018 - Present</EmploymentPeriod>
          </ExperienceDetails>
        </Experience>
      </WorkExperiencesList>
    </Section>
  );
}
