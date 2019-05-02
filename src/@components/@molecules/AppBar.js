import React from 'react';
import useWindowScroll from 'react-use/lib/useWindowScroll';
import useWindowSize from 'react-use/lib/useWindowSize';

import { NavigationDrawerContext } from '../@contexts';
import { COLORS } from '../../@theme';
import { MobileAppBarLayout, HamburgerIcon, IconButton } from '../@atoms';

export function AppBar() {
  const { openDrawer } = React.useContext(NavigationDrawerContext);
  const { height } = useWindowSize();
  const { y } = useWindowScroll();

  const threshold = height / y < 1.5;

  const appBarBackground = threshold ? 'white' : 'transparent';
  const appBarBorderColor = threshold ? COLORS.GRAY : null;
  const hamburgerIconColor = threshold ? 'normal' : 'inverted';

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
