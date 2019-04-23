import React from 'react';

import { DesktopAppBarLayout } from '../@atoms';
import { NavigationBar } from '../@molecules';

export function DesktopNavigation() {
  return (
    <DesktopAppBarLayout>
      <NavigationBar />
    </DesktopAppBarLayout>
  );
}
