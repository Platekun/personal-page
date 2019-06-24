import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { breakpoints, COLORS } from '../../@theme';
import { Section, SectionTitle } from '../../@components/@atoms';
import TICOMLogo from './TICOMLogo.png';
import NativAppsLogo from './NativAppsLogo.png';
import IdeawareLogo from './IdeawareLogo.png';

const Divider = styled.hr`
  width: 5px;
  height: ${({ current }) => (current ? '90px' : '75px')};
  border-radius: 5px;
  background-color: ${COLORS.PRIMARY};
  transform: rotate(180deg);
  margin-top: 14px;
  margin-bottom: 14px;
  position: ${({ current }) => (current ? 'relative' : 'static')};
  top: ${({ current }) => (current ? '16px' : 'unset')};
`;

const Experience = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoints.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: 80%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const PastExperienceLogo = styled.img`
  filter: grayscale(100%);
  opacity: 0.4;
`;

const PresentExperienceLogo = styled.div`
  width: 166px;
  height: 166px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 5px solid ${COLORS.PRIMARY};
`;

const ExperienceDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  opacity: ${({ current }) => (!current ? 0.4 : 1)};
`;

const JobTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 12px;
`;

const EmploymentPeriod = styled.p`
  font-size: 16px;
`;

function WorkPlace({ website, name, logo, current }) {
  if (current) {
    return (
      <a href={website}>
        <PresentExperienceLogo>
          <img src={logo} alt={name} />
        </PresentExperienceLogo>
      </a>
    );
  }

  return (
    <a href={website}>
      <PastExperienceLogo src={logo} alt={name} />
    </a>
  );
}

export function WorkExperience() {
  return (
    <Section id="experience">
      <SectionTitle>Work Experience</SectionTitle>

      <Divider />

      <ul>
        <Experience>
          <WorkPlace
            website="http://ticom.co/wordpress/la-empresa"
            name="TICOM S.A"
            logo={TICOMLogo}
          />

          <ExperienceDetails>
            <h3 hidden>Worked at TICOM S.A</h3>
            <JobTitle>Full Stack Developer</JobTitle>
            <EmploymentPeriod>Jan 2016 - Jul 2016</EmploymentPeriod>
          </ExperienceDetails>
        </Experience>

        <Divider />

        <Experience>
          <WorkPlace
            website="https://nativapps.com/"
            name="NativApps S.A.S"
            logo={NativAppsLogo}
          />

          <ExperienceDetails>
            <h3 hidden>Worked at NativApps S.A.S</h3>
            <JobTitle>Back-End Developer</JobTitle>
            <JobTitle>Front-End Developer</JobTitle>
            <EmploymentPeriod>Feb 2017 - Mar 2018</EmploymentPeriod>
          </ExperienceDetails>
        </Experience>

        <Divider current />

        <Experience>
          <WorkPlace
            website="http://ideaware.co"
            name="Ideaware Co"
            logo={IdeawareLogo}
            current
          />

          <ExperienceDetails current>
            <h3 hidden>Currently working at Ideaware</h3>
            <JobTitle>Front-End Developer</JobTitle>
            <EmploymentPeriod>Jul 2018 - Present</EmploymentPeriod>
          </ExperienceDetails>
        </Experience>
      </ul>
    </Section>
  );
}
