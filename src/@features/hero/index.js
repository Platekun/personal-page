import React from 'react';
import MediaQuery from 'react-responsive';

import { DesktopHero } from './Hero.desktop';
import { MobileHero } from './Hero.mobile';

export function Hero({ appBarVariant }) {
  return (
    <>
      <MediaQuery maxWidth={939}>
        <MobileHero appBarVariant={appBarVariant} />
      </MediaQuery>

      <MediaQuery minWidth={940}>
        <DesktopHero />
      </MediaQuery>
    </>
  );
}
