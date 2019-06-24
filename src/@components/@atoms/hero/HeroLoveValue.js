import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { space } from '../../../@theme';

export const LoveValue = styled.div`
  ${({ marginTop }) => marginTop && `margin-top: ${space(marginTop)}px`};
  ${({ marginBottom }) =>
    marginBottom && `margin-bottom: ${space(marginBottom)}px`};
  ${({ centerContents }) =>
    centerContents &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
  `};
`;

LoveValue.defaultProps = {
  marginTop: 11,
  marginBottom: 11,
  centerContents: false
};

LoveValue.propTypes = {
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  centerContents: PropTypes.bool
};
