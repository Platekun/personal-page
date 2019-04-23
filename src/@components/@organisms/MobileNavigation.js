import React from 'react';

import { NavigationDrawerContext } from '../@contexts';
import { AppBar, NavigationDrawer } from '../@molecules';

export function MobileNavigation() {
  const [current, setCurrent] = React.useState('hidden');

  function toggleNavigationDrawer() {
    current === 'hidden' ? setCurrent('visible') : setCurrent('hidden');
  }

  function closeDrawer() {
    setCurrent('hidden');
  }

  return (
    <NavigationDrawerContext.Provider
      value={{ current, toggleNavigationDrawer, closeDrawer }}
    >
      <AppBar />
      <NavigationDrawer />
    </NavigationDrawerContext.Provider>
  );
}
