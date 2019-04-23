import React from 'react';

import { LoveIcon, ScrollIcon, Hero } from '../../@components/@atoms';

export function MobileHero() {
  return (
    <>
      <Hero.MobileSection>
        <Hero.Greeting>
          Hello, <br /> <br />
          <Hero.MyName>I am Carlos</Hero.MyName>
          <br />
          <br /> Front-End developer and UI enthusiast
        </Hero.Greeting>

        <Hero.CallToAction>
          <ScrollIcon />
        </Hero.CallToAction>
      </Hero.MobileSection>

      <Hero.ValuesSection>
        <Hero.CoreValues>
          <LoveIcon />

          <Hero.LoveValue>
            <Hero.Subtitle>
              I <Hero.Love>love</Hero.Love> developing user interfaces
            </Hero.Subtitle>
          </Hero.LoveValue>

          <Hero.Subtitle>
            Making people’s lives better through software is my goal
          </Hero.Subtitle>
        </Hero.CoreValues>
      </Hero.ValuesSection>
    </>
  );
}
