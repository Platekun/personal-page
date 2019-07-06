import React from 'react';

import {
  Section,
  SectionTitle,
  HiddenUpMd,
  HiddenDownMd
} from '../../@components/@atoms';
import { MobileWorkExperience } from './WorkExperience.mobile';
import { DesktopWorkExperience } from './WorkExperience.desktop';

export function WorkExperience({ appBarVariant }) {
  return (
    <Section id="work-experience" appBarVariant={appBarVariant}>
      <SectionTitle>Work Experience</SectionTitle>

      <HiddenUpMd>
        <MobileWorkExperience appBarVariant={appBarVariant} />
      </HiddenUpMd>

      <HiddenDownMd>
        <DesktopWorkExperience />
      </HiddenDownMd>
    </Section>
  );
}
