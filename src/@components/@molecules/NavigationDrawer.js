import React from 'react';
import ClickOutside from 'react-onclickout';
import cuid from 'cuid';

import { NavigationDrawerContext } from '../@contexts';
import { Nav, NavDrawer, HamburgerIcon, IconButton } from '../@atoms';
import { LINKS } from '../../constants';

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
        {LINKS.map((link, idx) => (
          <Nav.ListItem
            key={cuid()}
            size={LINKS.length}
            idx={idx}
            align="vertical"
          >
            <Nav.Link href={link.url} onClick={closeDrawer}>
              {link.label}
            </Nav.Link>
          </Nav.ListItem>
        ))}
      </Nav.List>
    </>
  );

  return (
    <>
      <NavDrawer.DrawerContainer visible={isVisible}>
        {isVisible ? (
          <ClickOutside onClickOut={closeDrawer}>{drawerContent}</ClickOutside>
        ) : (
          drawerContent
        )}
      </NavDrawer.DrawerContainer>

      {isVisible && <NavDrawer.DrawerOverlay />}
    </>
  );
}
