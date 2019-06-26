import styled from '@emotion/styled';

import { TicomLogo, NativAppsLogo } from '../../@components/@atoms';

function makePastExperienceLogo(logo) {
  return styled(logo)`
    filter: grayscale(100%);
    opacity: 0.4;
    max-width: 355px;
  `;
}

export const PastTicomLogo = makePastExperienceLogo(TicomLogo);

export const PastNativAppsLogo = makePastExperienceLogo(NativAppsLogo);
