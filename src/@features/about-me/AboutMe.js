import React from 'react';

import {
  Section,
  SectionTitle,
  Parragraph,
  Important,
  AboutMe
} from '../../@components/@atoms';

export function AboutMeSection({ appBarVariant }) {
  return (
    <Section id="about-me" appBarVariant={appBarVariant}>
      <SectionTitle>Who am I?</SectionTitle>

      <article>
        <Parragraph>
          I have an undergraduate degree in Computer Science from Universidad
          del Norte but I consider myself self-taught person.
        </Parragraph>

        <Parragraph>
          My journey in the software development industry started in 2016. I
          specialize on front-end development, but I know my way in back-end
          aswell. Most of my work is built with React.
        </Parragraph>

        <Parragraph marginBottom={0}>
          I strive to build products with good UX, I believe that a mindset of “
          <Important>Building stuff with care</Important>” is the best way I
          have got to help people.
        </Parragraph>

        <AboutMe.Hobbies>
          <AboutMe.BookIcon />
          <AboutMe.DumbellIcon />

          <AboutMe.JoystickIcon />
          <AboutMe.HeadphonesIcon />
        </AboutMe.Hobbies>

        <Parragraph marginBottom={0}>
          I am always hungry for knowledge, you will always see me reading and
          sharing articles, tweets and listening to podcasts related to software
          development. I also love training myself and playing videogames from
          time to time.
        </Parragraph>
      </article>
    </Section>
  );
}
