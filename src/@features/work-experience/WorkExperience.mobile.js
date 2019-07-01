import React from 'react';

import {
  Section,
  SectionTitle,
  IdeawareLogo,
  WorkExperience
} from '../../@components/@atoms';
import { PastTicomLogo, PastNativAppsLogo } from './past-logos';

export function MobileWorkExperience({ appBarVariant }) {
  return (
    <Section id="experience" appBarVariant={appBarVariant}>
      <SectionTitle>Work Experience</SectionTitle>

      <WorkExperience.Divider />

      <WorkExperience.Jobs>
        <WorkExperience.Entry>
          <WorkExperience.JobLogoContainer href="http://ticom.co/wordpress/la-empresa">
            <PastTicomLogo />
          </WorkExperience.JobLogoContainer>

          <WorkExperience.JobDetails>
            <h3 hidden>Worked at TICOM S.A</h3>
            <WorkExperience.JobTitle>
              Full Stack Developer
            </WorkExperience.JobTitle>
            <WorkExperience.EmploymentPeriod>
              Jan 2016 - Jul 2016
            </WorkExperience.EmploymentPeriod>
          </WorkExperience.JobDetails>
        </WorkExperience.Entry>

        <WorkExperience.Divider />

        <WorkExperience.Entry>
          <WorkExperience.JobLogoContainer href="https://nativapps.com/">
            <PastNativAppsLogo />
          </WorkExperience.JobLogoContainer>

          <WorkExperience.JobDetails>
            <h3 hidden>Worked at NativApps S.A.S</h3>
            <WorkExperience.JobTitle>
              Back-End Developer
            </WorkExperience.JobTitle>
            <WorkExperience.JobTitle>
              Front-End Developer
            </WorkExperience.JobTitle>
            <WorkExperience.EmploymentPeriod>
              Feb 2017 - Mar 2018
            </WorkExperience.EmploymentPeriod>
          </WorkExperience.JobDetails>
        </WorkExperience.Entry>

        <WorkExperience.Divider variant="present" />

        <WorkExperience.Entry>
          <WorkExperience.JobLogoContainer href="http://ideaware.co">
            <WorkExperience.CurrentJobLogo>
              <IdeawareLogo />
            </WorkExperience.CurrentJobLogo>
          </WorkExperience.JobLogoContainer>

          <WorkExperience.JobDetails variant="present">
            <h3 hidden>Currently working at Ideaware</h3>
            <WorkExperience.JobTitle>
              Front-End Developer
            </WorkExperience.JobTitle>
            <WorkExperience.EmploymentPeriod>
              Jul 2018 - Present
            </WorkExperience.EmploymentPeriod>
          </WorkExperience.JobDetails>
        </WorkExperience.Entry>
      </WorkExperience.Jobs>
    </Section>
  );
}
