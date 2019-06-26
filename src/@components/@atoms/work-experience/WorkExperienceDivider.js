import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { COLORS, space } from '../../../@theme';

export const Divider = styled.hr`
  width: 5px;
  border-radius: 5px;
  border: none;
  background-color: ${COLORS.PRIMARY};
  margin-top: ${space(4)}px;
  margin-bottom: ${space(4)}px;
  height: 75px;
  position: static;
  top: unset;
  transform: rotate(180deg);

  ${({ variant }) => {
    switch (variant) {
      case 'present':
        return `
          height: 90px;
          position: relative;
          top: ${space(4)}px;
        `;

      default:
        return '';
    }
  }}
`;

Divider.propTypes = {
  variant: PropTypes.string
};

Divider.defaultProps = {
  variant: 'past'
};
