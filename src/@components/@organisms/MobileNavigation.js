import React from 'react';

import { NavigationDrawerContextProvider } from '../@contexts';
import { AppBar, NavigationDrawer } from '../@molecules';

export function MobileNavigation() {
  return (
    <NavigationDrawerContextProvider>
      <AppBar />
      <NavigationDrawer />
    </NavigationDrawerContextProvider>
  );
}
