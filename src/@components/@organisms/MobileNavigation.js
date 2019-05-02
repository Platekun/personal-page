import React from 'react';

import { MobileNavigationProvider } from '../@contexts';
import { AppBar, NavigationDrawer } from '../@molecules';

export function MobileNavigation() {
  return (
    <MobileNavigationProvider>
      <AppBar />
      <NavigationDrawer />
    </MobileNavigationProvider>
  );
}
