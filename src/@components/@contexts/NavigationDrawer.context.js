import React from 'react';

export const NavigationDrawerContext = React.createContext({});

export function NavigationDrawerContextProvider(props) {
  const [current, setCurrent] = React.useState('hidden');

  function openDrawer() {
    // If we set this in a sync way, they OnClick listener attached to the window document will close the drawer immediatly.
    // That's why this little hack is used, to defer until the click event has been executed
    setTimeout(() => setCurrent('visible'), 0);
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
