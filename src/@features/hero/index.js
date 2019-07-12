import React from 'react';

import { DesktopHero } from './Hero.desktop';
import { MobileHero } from './Hero.mobile';
import { CoreValuesMobile } from './CoreValues.mobile';
import { Hero, Hidden } from '../../@components/@atoms';

export function HeroComponent({ appBarVariant }) {
  return (
    <>
      <Hero.SectionLayout id="top" appBarVariant={appBarVariant}>
        <Hidden type="up" bp="lg">
          <MobileHero appBarVariant={appBarVariant} />
        </Hidden>

        <Hidden type="down" bp="lg">
          <DesktopHero />
        </Hidden>
      </Hero.SectionLayout>

      <Hidden type="up" bp="lg">
        <CoreValuesMobile />
      </Hidden>
    </>
  );
}
