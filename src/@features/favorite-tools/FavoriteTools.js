import React from 'react';

import {
  HTML5Icon,
  CSS3Icon,
  TypeScriptIcon,
  NodejsIcon,
  SketchIcon,
  ReactIcon,
  Tools
} from '../../@components/@atoms';

export function FavoriteTools({ appBarVariant }) {
  return (
    <Tools.Section id="tools" appBarVariant={appBarVariant}>
      <Tools.SectionContent>
        <Tools.Title>Favorite Tools</Tools.Title>

        <Tools.List>
          <Tools.ListItem>
            <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
              <HTML5Icon />
            </a>
            <h3 hidden>HTML5</h3>
          </Tools.ListItem>

          <Tools.ListItem>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3">
              <CSS3Icon />
            </a>
            <h3 hidden>CSS3</h3>
          </Tools.ListItem>

          <Tools.ListItem>
            <a href="https://reactjs.org/">
              <ReactIcon />
            </a>
            <h3 hidden>React.js</h3>
          </Tools.ListItem>

          <Tools.ListItem>
            <a href="https://www.sketch.com/">
              <SketchIcon />
            </a>
            <h3 hidden>Sketch</h3>
          </Tools.ListItem>

          <Tools.ListItem>
            <a href="https://www.typescriptlang.org/">
              <TypeScriptIcon />
            </a>
            <h3 hidden>TypeScript</h3>
          </Tools.ListItem>

          <Tools.ListItemWithLargeLogo>
            <a href="https://nodejs.org">
              <NodejsIcon />
            </a>
            <h3 hidden>Node.js</h3>
          </Tools.ListItemWithLargeLogo>
        </Tools.List>
      </Tools.SectionContent>
    </Tools.Section>
  );
}
