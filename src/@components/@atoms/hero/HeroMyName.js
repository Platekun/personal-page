import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { space, COLORS, breakpoints } from '../../../@theme';

export const MyName = styled.span`
  ${({ color }) => color && `color: ${color}`};
  font-weight: bold;
  font-size: ${space(8)}px;

  ${breakpoints.md} {
    font-size: ${space(15)}px;
  }

  ${breakpoints.xl} {
    font-size: ${space(16)}px;
  }

  ${breakpoints.uw} {
    font-size: ${space(17)}px;
  }

  ${breakpoints.t4} {
    font-size: ${space(16)}px;
  }
`;

MyName.defaultProps = {
  color: COLORS.WHITE
};

MyName.propTypes = {
  color: PropTypes.string
};
