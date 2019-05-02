import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { space, COLORS, breakpoints } from '../../../@theme';

export const MyName = styled.span`
  ${({ color }) => color && `color: ${color}`};
  font-weight: bold;
  font-size: ${space(8)}px;

  ${breakpoints.md.up} {
    font-size: ${space(15)}px;
  }

  ${breakpoints.xl.up} {
    font-size: ${space(16)}px;
  }

  ${breakpoints.uw.up} {
    font-size: ${space(17)}px;
  }

  ${breakpoints.tallDevice} {
    font-size: ${space(16)}px;
  }

  ${breakpoints.ut} {
    font-size: ${space(17)}px;
  }
`;

MyName.defaultProps = {
  color: COLORS.WHITE
};

MyName.propTypes = {
  color: PropTypes.string
};
