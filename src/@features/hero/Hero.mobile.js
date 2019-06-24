import React from 'react';

import {
  LoveIcon,
  ScrollIcon,
  Important,
  Hero
} from '../../@components/@atoms';

export function MobileHero() {
  return (
    <>
      <Hero.SectionLayout id="top">
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

      <Hero.ValuesSection id="values">
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
    </>
  );
}
