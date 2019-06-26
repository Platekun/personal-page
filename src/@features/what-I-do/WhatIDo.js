import React from 'react';
import styled from '@emotion/styled';

import { breakpoints, space } from '../../@theme';
import {
  Section,
  SectionTitle,
  Parragraph,
  CellphoneIcon,
  IdeaIcon,
  PaletteIcon,
  SmileIcon,
  StarsIcon
} from '../../@components/@atoms';

const SkillsRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${space(8)}px;
  margin-bottom: ${space(8)}px;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  li {
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${breakpoints.md} {
    flex-direction: row;
    margin-top: ${space(12)}px;
    margin-bottom: ${space(12)}px;
  }
`;

const Skill = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  margin-bottom: ${space(8)}px;

  ${breakpoints.md} {
    margin-bottom: 0;
  }

  svg {
    max-width: 70px;
    height: unset;

    ${breakpoints.md} {
      max-width: unset;
    }
  }
`;

const SkillName = styled(Parragraph)`
  max-width: ${space(86)}px;
  text-align: center;
  margin-top: ${space(4)}px;
  margin-bottom: 0;

  ${breakpoints.md} {
    margin-top: ${space(10)}px;
  }
`;

export function WhatIDo() {
  return (
    <Section id="skills">
      <SectionTitle>What I do</SectionTitle>

      <ul>
        <SkillsRow>
          <Skill>
            <SmileIcon />
            <SkillName>Develop user facing features for web apps</SkillName>
          </Skill>

          <Skill>
            <PaletteIcon />
            <SkillName>Translate designs into code</SkillName>
          </Skill>
        </SkillsRow>

        <Skill>
          <IdeaIcon />
          <SkillName>Identify UI problems and possible solutions</SkillName>
        </Skill>

        <SkillsRow>
          <Skill>
            <StarsIcon />
            <SkillName>
              Design, build and mantain high quality front-end code
            </SkillName>
          </Skill>

          <Skill>
            <CellphoneIcon />
            <SkillName>
              Build UI cross-browser and multi-device functionalities
            </SkillName>
          </Skill>
        </SkillsRow>
      </ul>
    </Section>
  );
}
