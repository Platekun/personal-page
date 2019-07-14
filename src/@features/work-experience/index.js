import React from 'react';
import clsx from 'clsx';

import sharedStyles from './WorkExperience.module.css';
import mobileStyles from './WorkExperience.mobile.module.css';
import desktopStyles from './WorkExperience.desktop.module.css';
import { Section, SectionTitle, Hidden } from '../../@components/@atoms';
import { MobileWorkExperience } from './WorkExperience.mobile';
import { DesktopWorkExperience } from './WorkExperience.desktop';

export function WorkExperience() {
  return (
    <Section
      className={clsx([
        sharedStyles.workExperience,
        mobileStyles.workExperience,
        desktopStyles.workExperience
      ])}
    >
      <SectionTitle>Work Experience</SectionTitle>

      <Hidden type="up" bp="md">
        <MobileWorkExperience />
      </Hidden>

      <Hidden type="down" bp="md">
        <DesktopWorkExperience />
      </Hidden>
    </Section>
  );
}
