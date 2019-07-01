import React from 'react';

export const NavigationDrawerContext = React.createContext({});

export function NavigationDrawerContextProvider(props) {
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
