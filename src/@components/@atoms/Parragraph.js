import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { space, breakpoints } from '../../@theme';

export const Parragraph = styled.p`
  line-height: 1.5;
  margin-bottom: ${({ marginBottom }) => `${space(marginBottom)}px`};

  ${breakpoints.sm.up} {
    font-size: ${space(5)}px;
  }

  ${breakpoints.lg.up} {
    font-size: ${space(6)}px;
  }

  ${breakpoints.xl.up} {
    font-size: ${space(7)}px;
  }

  ${breakpoints.uw.up} {
    font-size: ${space(8)}px;
  }

  ${breakpoints.tallDevice} {
    font-size: ${space(7)}px;
  }

  ${breakpoints.tallerDevice} {
    font-size: ${space(8)}px;
  }

  ${breakpoints.ut} {
    font-size: ${space(9)}px;
  }
`;

Parragraph.defaultProps = {
  marginBottom: 8
};

Parragraph.propTypes = {
  marginBottom: PropTypes.number
};
