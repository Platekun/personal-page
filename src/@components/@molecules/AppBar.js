import React from 'react';

import { NavigationDrawerContext, AppBarContext } from '../@contexts';
import { COLORS } from '../../@theme';
import { MobileAppBarLayout, HamburgerIcon, IconButton } from '../@atoms';

export function AppBar() {
  const { openDrawer } = React.useContext(NavigationDrawerContext);
  const { appBarState } = React.useContext(AppBarContext);

  let appBarBackground;
  let appBarBorderColor;
  let hamburgerIconColor;

  if (appBarState === 'normal') {
    appBarBackground = 'white';
    appBarBorderColor = COLORS.GRAY;
    hamburgerIconColor = appBarState;
  } else if (appBarState === 'inverted') {
    appBarBackground = 'transparent';
    appBarBorderColor = null;
    hamburgerIconColor = appBarState;
  }

  return (
    <MobileAppBarLayout
      backgroundColor={appBarBackground}
      borderBottom={appBarBorderColor}
    >
      <IconButton onClick={openDrawer}>
        <HamburgerIcon type={hamburgerIconColor} />
      </IconButton>
    </MobileAppBarLayout>
  );
}
