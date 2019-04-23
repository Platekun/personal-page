import React from 'react';

import { COLORS } from '../../@theme';
import { Wrapper, LoveIcon, Hero } from '../../@components/@atoms';

export function DesktopHero() {
  return (
    <>
      <Hero.DesktopSection>
        <Wrapper>
          <Hero.Hero />

          <Hero.GreetingContainer>
            <Hero.Greeting color={COLORS.TEXT_PRIMARY} align="left">
              Hello,
              <br />
              <Hero.MyName color={COLORS.PRIMARY}>I am Carlos,</Hero.MyName>
              <br />
              Front-End developer and UI enthusiast
            </Hero.Greeting>
          </Hero.GreetingContainer>

          <Hero.CoreValues>
            <Hero.LoveValue centerContents marginBottom={4}>
              <Hero.Subtitle marginRight={4}>
                I <Hero.Love>love</Hero.Love> developing user interfaces
              </Hero.Subtitle>

              <LoveIcon />
            </Hero.LoveValue>

            <Hero.Subtitle>
              Making people’s lives better through software is my goal
            </Hero.Subtitle>
          </Hero.CoreValues>
        </Wrapper>
      </Hero.DesktopSection>
    </>
  );
}
