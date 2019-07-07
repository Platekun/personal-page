import React from 'react';
import ClickOutside from 'react-onclickout';
import cuid from 'cuid';

import { NavigationDrawerContext } from '../@contexts';
import { Nav, NavDrawer, HamburgerIcon, IconButton } from '../@atoms';
import links from './links';

export function NavigationDrawer() {
  const { current, closeDrawer } = React.useContext(NavigationDrawerContext);

  const isVisible = current === 'visible';

  const drawerContent = (
    <>
      <NavDrawer.HamburgerContainer>
        <IconButton onClick={closeDrawer}>
          <HamburgerIcon type="normal" />
        </IconButton>
      </NavDrawer.HamburgerContainer>

      <Nav.List align="vertical">
        {links.map((link, idx) => (
          <Nav.ListItem
            key={cuid()}
            size={links.length}
            idx={idx}
            align="vertical"
          >
            <Nav.Link href={link.url}>{link.label}</Nav.Link>
          </Nav.ListItem>
        ))}
      </Nav.List>
    </>
  );

  return (
    <>
      <ClickOutside onClickOut={isVisible ? closeDrawer : undefined}>
        <NavDrawer.DrawerContainer visible={isVisible}>
          {drawerContent}
        </NavDrawer.DrawerContainer>
      </ClickOutside>

      {isVisible && <NavDrawer.DrawerOverlay />}
    </>
  );
}
