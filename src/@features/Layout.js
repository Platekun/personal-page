import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { css } from '@emotion/core';

import { globalStyles } from '../@theme';
import BackgroundImage from './background.svg';
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

      <main
        css={css`
          background-image: url(${BackgroundImage});
          background-size: cover;
        `}
        {...props}
      />
    </BrowserRouter>
  );
}
