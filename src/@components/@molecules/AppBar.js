import React from 'react';
import useWindowScroll from 'react-use/lib/useWindowScroll';
import useWindowSize from 'react-use/lib/useWindowSize';

import { NavigationDrawerContext } from '../@contexts';
import { MobileAppBarLayout, HamburgerIcon, IconButton } from '../@atoms';

export function AppBar() {
  const { toggleNavigationDrawer } = React.useContext(NavigationDrawerContext);
  const { height } = useWindowSize();
  const { y } = useWindowScroll();

  const appBarBackground = height / y < 1.5 ? 'white' : 'transparent';
  const hamburgerIconColor = height / y < 1.5 ? 'normal' : 'inverted';

  return (
    <MobileAppBarLayout backgroundColor={appBarBackground}>
      <IconButton onClick={toggleNavigationDrawer}>
        <HamburgerIcon type={hamburgerIconColor} />
      </IconButton>
    </MobileAppBarLayout>
  );
}
