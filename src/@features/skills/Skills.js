import React from 'react';

import styles from './Skills.module.css';
import {
  Section,
  SectionTitle,
  Skills,
  CellphoneIcon,
  IdeaIcon,
  PaletteIcon,
  SmileIcon,
  StarsIcon,
  Parragraph
} from '../../@components/@atoms';

export function WhatIDo({ appBarVariant }) {
  return (
    <Section className={styles.skills}>
      <SectionTitle>What I do</SectionTitle>

      <ul>
        <Skills.Row>
          <Skills.Item>
            <SmileIcon />
            <Parragraph className={styles.skillName}>
              Develop user facing features for web apps
            </Parragraph>
          </Skills.Item>

          <Skills.Item>
            <PaletteIcon />
            <Parragraph className={styles.skillName}>
              Translate designs into code
            </Parragraph>
          </Skills.Item>
        </Skills.Row>

        <Skills.Item>
          <IdeaIcon />
          <Parragraph className={styles.skillName}>
            Identify UI problems and possible solutions
          </Parragraph>
        </Skills.Item>

        <Skills.Row>
          <Skills.Item>
            <StarsIcon />
            <Parragraph className={styles.skillName}>
              Design, build and mantain high quality front-end code
            </Parragraph>
          </Skills.Item>

          <Skills.Item>
            <CellphoneIcon />
            <Parragraph className={styles.skillName}>
              Build UI cross-browser and multi-device functionalities
            </Parragraph>
          </Skills.Item>
        </Skills.Row>
      </ul>
    </Section>
  );
}
