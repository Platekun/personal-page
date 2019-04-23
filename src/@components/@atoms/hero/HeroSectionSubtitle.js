import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { space } from '../../../@theme';

export const Subtitle = styled.h2`
  font-weight: normal;
  font-size: ${space(6)}px;
  ${({ align }) => align && `text-align: ${align}`};
  ${({ marginRight }) =>
    marginRight && `margin-right: ${space(marginRight)}px`};

  @media screen and (min-width: 768px) and (max-width: 940px) {
    font-size: ${space(8)}px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${space(8)}px;
  }
`;

Subtitle.defaultProps = {
  align: 'center'
};

Subtitle.propTypes = {
  align: PropTypes.string
};
