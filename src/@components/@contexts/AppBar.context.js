import React from 'react';

export const AppBarContext = React.createContext({});

export function AppBarContextProvider(props) {
  const [appBarState, setAppBarState] = React.useState('inverted');

  function setInverted() {
    setAppBarState('inverted');
  }

  function setNormal() {
    setAppBarState('normal');
  }

  return (
    <AppBarContext.Provider value={{ appBarState, setInverted, setNormal }}>
      {props.children}
    </AppBarContext.Provider>
  );
}
