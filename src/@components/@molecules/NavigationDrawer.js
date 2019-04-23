import React from 'react';
import ClickOutside from 'react-onclickout';
import cuid from 'cuid';

import { NavigationDrawerContext } from '../@contexts';
import { Nav, NavDrawer, HamburgerIcon, IconButton } from '../@atoms';
import { LINKS } from '../../constants';

export function NavigationDrawer() {
  const { current, closeDrawer } = React.useContext(NavigationDrawerContext);

  return (
    <>
      <ClickOutside onClickOut={closeDrawer}>
        <NavDrawer.DrawerContainer visible={current === 'visible'}>
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
                <Nav.Link to={link.url} onClick={closeDrawer} smooth>
                  {link.label}
                </Nav.Link>
              </Nav.ListItem>
            ))}
          </Nav.List>
        </NavDrawer.DrawerContainer>
      </ClickOutside>

      {current === 'visible' && <NavDrawer.DrawerOverlay />}
    </>
  );
}
