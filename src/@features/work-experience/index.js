import React from 'react';
import MediaQuery from 'react-responsive';

import { MobileWorkExperience } from './WorkExperience.mobile';
import { DesktopWorkExperience } from './WorkExperience.desktop';

export function WorkExperience({ appBarVariant }) {
  return (
    <>
      <MediaQuery query="(max-width: 767px)">
        <MobileWorkExperience appBarVariant={appBarVariant} />
      </MediaQuery>

      <MediaQuery query="(min-width: 768px)">
        <DesktopWorkExperience />
      </MediaQuery>
    </>
  );
}
