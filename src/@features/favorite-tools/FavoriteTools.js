import React from 'react';

import styles from './FavoriteTools.module.css';

import {
  Section,
  SectionTitle,
  HTML5Icon,
  CSS3Icon,
  TypeScriptIcon,
  NodejsIcon,
  SketchIcon,
  ReactIcon
} from '../../@components/@atoms';

export function FavoriteTools() {
  return (
    <Section className={styles.favoriteTools}>
      <div className={styles.content}>
        <SectionTitle className={styles.title}>Favorite Tools</SectionTitle>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
              <HTML5Icon />
            </a>
            <h3 hidden>HTML5</h3>
          </li>

          <li className={styles.listItem}>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3">
              <CSS3Icon />
            </a>
            <h3 hidden>CSS3</h3>
          </li>

          <li className={styles.listItem}>
            <a href="https://reactjs.org/">
              <ReactIcon />
            </a>
            <h3 hidden>React.js</h3>
          </li>

          <li className={styles.listItem}>
            <a href="https://www.sketch.com/">
              <SketchIcon />
            </a>
            <h3 hidden>Sketch</h3>
          </li>

          <li className={styles.listItem}>
            <a href="https://www.typescriptlang.org/">
              <TypeScriptIcon />
            </a>
            <h3 hidden>TypeScript</h3>
          </li>

          <li className={styles.listItemLarge}>
            <a href="https://nodejs.org">
              <NodejsIcon />
            </a>
            <h3 hidden>Node.js</h3>
          </li>
        </ul>
      </div>
    </Section>
  );
}
