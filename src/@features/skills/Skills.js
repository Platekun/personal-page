import React from 'react';

import {
  Section,
  SectionTitle,
  Skills,
  CellphoneIcon,
  IdeaIcon,
  PaletteIcon,
  SmileIcon,
  StarsIcon
} from '../../@components/@atoms';

export function WhatIDo() {
  return (
    <Section id="skills">
      <SectionTitle>What I do</SectionTitle>

      <ul>
        <Skills.Row>
          <Skills.Item>
            <SmileIcon />
            <Skills.Name>Develop user facing features for web apps</Skills.Name>
          </Skills.Item>

          <Skills.Item>
            <PaletteIcon />
            <Skills.Name>Translate designs into code</Skills.Name>
          </Skills.Item>
        </Skills.Row>

        <Skills.Item>
          <IdeaIcon />
          <Skills.Name>Identify UI problems and possible solutions</Skills.Name>
        </Skills.Item>

        <Skills.Row>
          <Skills.Item>
            <StarsIcon />
            <Skills.Name>
              Design, build and mantain high quality front-end code
            </Skills.Name>
          </Skills.Item>

          <Skills.Item>
            <CellphoneIcon />
            <Skills.Name>
              Build UI cross-browser and multi-device functionalities
            </Skills.Name>
          </Skills.Item>
        </Skills.Row>
      </ul>
    </Section>
  );
}
