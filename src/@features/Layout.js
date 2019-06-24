import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import { globalStyles } from '../@theme';
import { MobileNavigation, DesktopNavigation } from '../@components/@organisms';

export function Layout(props) {
  return (
    <BrowserRouter>
      {globalStyles}

      <MediaQuery query="(max-width: 939px)">
        <MobileNavigation />
      </MediaQuery>

      <MediaQuery query="(min-width: 940px)">
        <DesktopNavigation />
      </MediaQuery>

      <main {...props} />
    </BrowserRouter>
  );
}
