import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { space, COLORS, breakpoints } from '../../../@theme';

export const Link = styled(AnchorLink)`
  font-weight: bold;
  text-decoration: none;
  transition: ease 0.3s color;

  &:hover {
    color: ${COLORS.ACCENT};
  }

  ${breakpoints.lg} {
    font-size: ${space(4)}px;
  }

  ${breakpoints.xl} {
    font-size: ${space(5)}px;
  }

  ${breakpoints.uw} {
    font-size: ${space(6)}px;
  }

  ${breakpoints.t1} {
    font-size: ${space(5)}px;
  }

  ${breakpoints.t3} {
    font-size: ${space(6)}px;
  }

  ${breakpoints.t4} {
    font-size: ${space(7)}px;
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
