import React from 'react';
import cuid from 'cuid';

import { Nav } from '../@atoms';
import { LINKS } from '../../constants';

export function NavigationBar() {
  return (
    <Nav.Container>
      <Nav.List align="horizontal">
        {LINKS.map((link, idx) => (
          <Nav.ListItem
            key={cuid()}
            size={LINKS.length}
            idx={idx}
            align="horizontal"
          >
            <Nav.Link smooth to={link.url}>
              {link.label}
            </Nav.Link>
          </Nav.ListItem>
        ))}
      </Nav.List>
    </Nav.Container>
  );
}
