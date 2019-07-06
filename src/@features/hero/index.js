import React from 'react';

import { DesktopHero } from './Hero.desktop';
import { MobileHero } from './Hero.mobile';
import { CoreValuesMobile } from './CoreValues.mobile';
import { Hero, HiddenUpLg, HiddenDownLg } from '../../@components/@atoms';

export function HeroComponent({ appBarVariant }) {
  return (
    <>
      <Hero.SectionLayout id="top" appBarVariant={appBarVariant}>
        <HiddenUpLg>
          <MobileHero appBarVariant={appBarVariant} />
        </HiddenUpLg>

        <HiddenDownLg>
          <DesktopHero />
        </HiddenDownLg>
      </Hero.SectionLayout>

      <HiddenUpLg>
        <CoreValuesMobile />
      </HiddenUpLg>
    </>
  );
}
