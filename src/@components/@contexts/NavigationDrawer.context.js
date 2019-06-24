import React from 'react';

export const NavigationDrawerContext = React.createContext({
  current: '',
  toggleNavigationDrawer: () => {},
  closeDrawer: () => {}
});

export function MobileNavigationProvider(props) {
  const [current, setCurrent] = React.useState('hidden');

  function openDrawer() {
    setCurrent('visible');
  }

  function closeDrawer() {
    setCurrent('hidden');
  }

  return (
    <NavigationDrawerContext.Provider
      value={{ current, openDrawer, closeDrawer }}
    >
      {props.children}
    </NavigationDrawerContext.Provider>
  );
}
