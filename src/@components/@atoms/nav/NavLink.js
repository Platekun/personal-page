import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { space, COLORS } from '../../../@theme';

export const Link = styled(AnchorLink)`
  font-weight: bold;
  text-decoration: none;
  transition: ease 0.3s color;

  &:hover {
    color: ${COLORS.ACCENT};
  }

  @media screen and (min-width: 940px) {
    font-size: ${space(4)}px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${space(6)}px;
  }
`;

// Note: 69px is the current app bar height on mobile.
// Change accordingly
Link.defaultProps = {
  offset: '69'
};

Link.propTypes = {
  offset: PropTypes.string
};
