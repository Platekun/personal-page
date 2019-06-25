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

const TimeSegment = styled.div`
  width: 5px;
  background-color: ${COLORS.PRIMARY};
  height: 100%;
  ${({ start }) =>
    !start
      ? ''
      : `
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;    
  `}

  ${({ present }) =>
    !present
      ? ''
      : `
    height: 50%;
    position: relative;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    bottom: 50px;
  `};
`;

const EventInTimeline = styled.div`
  width: 5px;
  height: 65px;
  background-color: ${COLORS.PRIMARY};
  transform: rotate(270deg);
  position: relative;
  top: 65%;
  border-radius: 5px;
  ${({ past }) =>
    !past
      ? ''
      : `
    top: 30%;
    opacity: 0.1;
  `}
`;

export function DesktopWorkExperience() {
  return (
    <Section id="experience">
      <SectionTitle>Work Experience</SectionTitle>

      <WorkExperiencesList>
        <Experience>
          <WorkPlaceLogoContainer href="http://ticom.co/wordpress/la-empresa">
            <PastTicomLogo />
          </WorkPlaceLogoContainer>

          <TimeSegment start>
            <EventInTimeline past />
          </TimeSegment>

          <ExperienceDetails>
            <h3 hidden>Worked at TICOM S.A</h3>
            <JobTitle>Full Stack Developer</JobTitle>
            <EmploymentPeriod>Jan 2016 - Jul 2016</EmploymentPeriod>
          </ExperienceDetails>
        </Experience>

        <Experience>
          <WorkPlaceLogoContainer href="https://nativapps.com/">
            <PastNativAppsLogo />
          </WorkPlaceLogoContainer>

          <TimeSegment>
            <EventInTimeline past />
          </TimeSegment>

          <ExperienceDetails>
            <h3 hidden>Worked at NativApps S.A.S</h3>
            <JobTitle>Back-End Developer</JobTitle>
            <JobTitle>Front-End Developer</JobTitle>
            <EmploymentPeriod>Feb 2017 - Mar 2018</EmploymentPeriod>
          </ExperienceDetails>
        </Experience>

        <Experience>
          <WorkPlaceLogoContainer href="http://ideaware.co">
            <PresentExperienceLogo>
              <IdeawareLogo />
            </PresentExperienceLogo>
          </WorkPlaceLogoContainer>

          <TimeSegment present>
            <EventInTimeline />
          </TimeSegment>

          <ExperienceDetails current>
            <h3 hidden>Currently working at Ideaware</h3>
            <JobTitle>Front-End Developer</JobTitle>
            <EmploymentPeriod>Jul 2018 - Present</EmploymentPeriod>
          </ExperienceDetails>
        </Experience>
      </WorkExperiencesList>
    </Section>
  );
}
