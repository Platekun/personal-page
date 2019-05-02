import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { COLORS, space, breakpoints } from '../../../@theme';

export const Greeting = styled.h1`
  line-height: 1.5;
  font-weight: normal;
  font-size: ${space(6)}px;
  ${({ color }) => color && `color: ${color}`};
  ${({ align }) => align && `text-align: ${align}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ maxWidth }) =>
    maxWidth ? `max-width: ${maxWidth}px` : 'max-width: auto'};
  position: relative;

  ${breakpoints.md.up} {
    font-size: ${space(8)}px;
  }

  ${breakpoints.lg.up} {
    font-size: ${space(8)}px;
  }

  ${breakpoints.xl.up} {
    font-size: ${space(10)}px;
  }

  ${breakpoints.uw.up} {
    font-size: ${space(12)}px;
  }

  ${breakpoints.tallDevice} {
    text-align: center;
    font-size: ${space(10)}px;
  }

  ${breakpoints.tallerDevice} {
    text-align: center;
    font-size: ${space(11)}px;
  }

  ${breakpoints.ut} {
    font-size: ${space(12)}px;
  }
`;

Greeting.defaultProps = {
  color: COLORS.FADED_WHITE,
  align: 'center',
  margin: '0 auto',
  maxWidth: 480
};

Greeting.propTypes = {
  color: PropTypes.string,
  align: PropTypes.string,
  maxWidth: PropTypes.number,
  margin: PropTypes.string
};
