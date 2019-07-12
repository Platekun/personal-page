import React from 'react';

import { Section, SectionTitle, Hidden } from '../../@components/@atoms';
import { MobileWorkExperience } from './WorkExperience.mobile';
import { DesktopWorkExperience } from './WorkExperience.desktop';

export function WorkExperience({ appBarVariant }) {
  return (
    <Section id="work-experience" appBarVariant={appBarVariant}>
      <SectionTitle>Work Experience</SectionTitle>

      <Hidden type="up" bp="md">
        <MobileWorkExperience appBarVariant={appBarVariant} />
      </Hidden>

      <Hidden type="down" bp="md">
        <DesktopWorkExperience />
      </Hidden>
    </Section>
  );
}
