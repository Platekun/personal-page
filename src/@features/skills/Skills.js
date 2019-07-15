import React from 'react';
import clsx from 'clsx';

import styles from './Skills.module.css';
import {
  Section,
  SectionTitle,
  CellphoneIcon,
  IdeaIcon,
  PaletteIcon,
  SmileIcon,
  StarsIcon,
  Parragraph
} from '../../@components/@atoms';

export function WhatIDo() {
  return (
    <Section className={styles.skills}>
      <SectionTitle>What I do</SectionTitle>

      <ul className={styles.list}>
        <li className={styles.skill}>
          <SmileIcon />
          <Parragraph className={styles.skillName}>
            Develop user facing features for web apps
          </Parragraph>
        </li>

        <li className={styles.skill}>
          <PaletteIcon />
          <Parragraph className={styles.skillName}>
            Translate designs into code
          </Parragraph>
        </li>

        <li className={clsx([styles.skill, styles.wideSkill])}>
          <IdeaIcon />
          <Parragraph className={styles.skillName}>
            Identify UI problems and possible solutions
          </Parragraph>
        </li>

        <li className={styles.skill}>
          <StarsIcon />
          <Parragraph className={styles.skillName}>
            Design, build and mantain high quality front-end code
          </Parragraph>
        </li>

        <li className={styles.skill}>
          <CellphoneIcon />
          <Parragraph className={styles.skillName}>
            Build UI cross-browser and multi-device functionalities
          </Parragraph>
        </li>
      </ul>
    </Section>
  );
}
