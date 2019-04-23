import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { space, COLORS } from '../../../@theme';

export const MyName = styled.span`
  ${({ color }) => color && `color: ${color}`};
  font-weight: bold;
  font-size: ${space(8)}px;

  @media screen and (min-width: 768px) {
    font-size: ${space(15)}px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${space(16)}px;
  }
`;

MyName.defaultProps = {
  color: COLORS.WHITE
};

MyName.propTypes = {
  color: PropTypes.string
};
