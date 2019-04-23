import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { space, zIndex } from '../../@theme';

export const MobileAppBarLayout = styled.div`
  ${({ backgroundColor }) =>
    backgroundColor &&
    `
    background-color: ${backgroundColor};
  `};
  padding: ${space(4)}px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.NAVIGATION};
  transition: ease-in 0.3s background-color;
`;

MobileAppBarLayout.defaultProps = {
  backgroundColor: 'transparent'
};

MobileAppBarLayout.propTypes = {
  backgroundColor: PropTypes.string
};
