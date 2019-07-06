import React from 'react';

import { COLORS } from '../../@theme';
import { LoveIcon, Important, Hero } from '../../@components/@atoms';

export function DesktopHero() {
  return (
    <>
      <Hero.DesktopSectionHighlight>
        <Hero.DesktopIllustrationContainer>
          <Hero.Illustration />
        </Hero.DesktopIllustrationContainer>

        <Hero.GreetingContainer>
          <Hero.Greeting
            color={COLORS.TEXT_PRIMARY}
            align="left"
            maxWidth={469}
            margin="unset"
          >
            Hello,
            <br />
            <Hero.MyName color={COLORS.PRIMARY}>I am Carlos,</Hero.MyName>
            <br />
            Front-End developer and UI enthusiast
          </Hero.Greeting>
        </Hero.GreetingContainer>
      </Hero.DesktopSectionHighlight>

      <Hero.CoreValues>
        <Hero.LoveValue centerContents marginTop={0} marginBottom={4}>
          <Hero.Subtitle marginRight={4}>
            I <Important>love</Important> developing user interfaces
          </Hero.Subtitle>

          <LoveIcon />
        </Hero.LoveValue>

        <Hero.Subtitle>
          Making people’s lives better through software is my goal
        </Hero.Subtitle>
      </Hero.CoreValues>
    </>
  );
}
