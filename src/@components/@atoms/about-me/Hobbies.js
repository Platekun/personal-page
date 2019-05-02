import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { space, breakpoints } from '../../../@theme';

export const Hobbies = styled.div`
  width: 100%;
  max-width: 320px;
  margin-top: ${({ marginTop }) => marginTop && `${space(marginTop)}px`};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom && `${space(marginBottom)}px`};
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${breakpoints.md.up} {
    max-width: 519px;
  }

  ${breakpoints.xl.up} {
    margin: ${space(16)}px auto;
  }
`;

Hobbies.defaultProps = {
  marginBottom: 8,
  marginTop: 8
};

Hobbies.propTypes = {
  marginBottom: PropTypes.number,
  marginTop: PropTypes.number
};
