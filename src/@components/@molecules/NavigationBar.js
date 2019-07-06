import React from 'react';
import cuid from 'cuid';

import { Nav } from '../@atoms';
import links from './links';

export function NavigationBar() {
  return (
    <Nav.Container>
      <Nav.List align="horizontal">
        {links.map((link, idx) => (
          <Nav.ListItem
            key={cuid()}
            size={links.length}
            idx={idx}
            align="horizontal"
          >
            <Nav.Link href={link.url} offset="30">
              {link.label}
            </Nav.Link>
          </Nav.ListItem>
        ))}
      </Nav.List>
    </Nav.Container>
  );
}
