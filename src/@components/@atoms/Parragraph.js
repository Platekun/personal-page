import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { space, breakpoints } from '../../@theme';

export const Parragraph = styled.p`
  line-height: 1.5;
  margin-bottom: ${({ marginBottom }) => `${space(marginBottom)}px`};

  ${breakpoints.sm} {
    font-size: ${space(5)}px;
  }

  ${breakpoints.lg} {
    font-size: ${space(6)}px;
  }

  ${breakpoints.xl} {
    font-size: ${space(7)}px;
  }

  ${breakpoints.uw} {
    font-size: ${space(8)}px;
  }

  ${breakpoints.t1} {
    font-size: ${space(7)}px;
  }

  ${breakpoints.t3} {
    font-size: ${space(8)}px;
  }

  ${breakpoints.t4} {
    font-size: ${space(9)}px;
  }
`;

Parragraph.defaultProps = {
  marginBottom: 8
};

Parragraph.propTypes = {
  marginBottom: PropTypes.number
};
