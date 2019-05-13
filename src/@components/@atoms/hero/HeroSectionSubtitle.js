import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { space, breakpoints } from '../../../@theme';

export const Subtitle = styled.h2`
  font-weight: normal;
  font-size: ${space(6)}px;
  ${({ align }) => align && `text-align: ${align}`};
  ${({ marginRight }) =>
    marginRight && `margin-right: ${space(marginRight)}px`};

  @media screen and (min-width: 768px) and (max-width: 939px) {
    font-size: ${space(8)}px;
  }

  @media screen and (min-width: 940px) and (min-height: 1024px) {
    font-size: ${space(8)}px;
  }

  ${breakpoints.xl} {
    font-size: ${space(8)}px;
  }

  ${breakpoints.uw} {
    font-size: ${space(10)}px;
  }

  ${breakpoints.t1} {
    font-size: ${space(8)}px;
  }

  ${breakpoints.t3} {
    font-size: ${space(10)}px;
  }

  ${breakpoints.t4} {
    font-size: ${space(12)}px;
  }
`;

Subtitle.defaultProps = {
  align: 'center'
};

Subtitle.propTypes = {
  align: PropTypes.string
};
