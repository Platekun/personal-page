import React from 'react';
import { Global } from '@emotion/core';

import { normalize } from './normalize';
import { customStyles } from './customStyles';

export const globalStyles = <Global styles={[normalize, customStyles]} />;
