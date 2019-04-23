import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { COLORS, space } from '../../../@theme';

export const Greeting = styled.h1`
  font-weight: normal;
  font-size: ${space(6)}px;
  ${({ color }) => color && `color: ${color}`};
  ${({ align }) => align && `text-align: ${align}`};
  ${({ maxWidth }) =>
    maxWidth ? `max-width: ${maxWidth}` : 'max-width: auto'};
  margin: 0 auto;
  position: relative;

  @media screen and (min-width: 768px) {
    font-size: ${space(8)}px;
  }

  @media screen and (min-width: 940px) {
    font-size: ${space(8)}px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${space(10)}px;
  }
`;

Greeting.defaultProps = {
  color: COLORS.FADED_WHITE,
  align: 'center',
  maxWidth: '480px'
};

Greeting.propTypes = {
  color: PropTypes.string,
  align: PropTypes.string,
  maxWidth: PropTypes.string
};
