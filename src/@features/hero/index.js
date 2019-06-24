import React from 'react';
import MediaQuery from 'react-responsive';

import { DesktopHero } from './Hero.desktop';
import { MobileHero } from './Hero.mobile';

export function Hero() {
  return (
    <>
      <MediaQuery maxWidth={939}>
        <MobileHero />
      </MediaQuery>

      <MediaQuery minWidth={940}>
        <DesktopHero />
      </MediaQuery>
    </>
  );
}
