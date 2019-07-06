import React from 'react';

import { ScrollIcon, Hero } from '../../@components/@atoms';

export function MobileHero({ appBarVariant }) {
  return (
    <Hero.SectionLayout id="top" appBarVariant={appBarVariant}>
      <Hero.Greeting>
        Hello, <br /> <br />
        <Hero.MyName>I am Carlos</Hero.MyName>
        <br />
        <br /> Front-End developer and UI enthusiast
      </Hero.Greeting>

      <Hero.CallToAction>
        <ScrollIcon />
      </Hero.CallToAction>
    </Hero.SectionLayout>
  );
}
