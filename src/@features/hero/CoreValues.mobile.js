import React from 'react';

import { LoveIcon, Important, Hero } from '../../@components/@atoms';

export function CoreValuesMobile({ appBarVariant }) {
  return (
    <Hero.ValuesSection id="values" appBarVariant={appBarVariant}>
      <Hero.CoreValues>
        <LoveIcon />

        <Hero.LoveValue>
          <Hero.Subtitle>
            I <Important>love</Important> developing user interfaces
          </Hero.Subtitle>
        </Hero.LoveValue>

        <Hero.Subtitle>
          Making people’s lives better through software is my goal
        </Hero.Subtitle>
      </Hero.CoreValues>
    </Hero.ValuesSection>
  );
}
