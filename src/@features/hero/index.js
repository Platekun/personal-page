import React from 'react';
import MediaQuery from 'react-responsive';

import { DesktopHero } from './Hero.desktop';
import { MobileHero } from './Hero.mobile';

export function Hero() {
  return (
    <>
      <MediaQuery query="(max-width: 939px)">
        <MobileHero />
      </MediaQuery>

      <MediaQuery query="(min-width: 940px)">
        <DesktopHero />
      </MediaQuery>
    </>
  );
}
