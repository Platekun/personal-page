import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { COLORS } from '../../../@theme';

export const TimeSegment = styled.div`
  width: 5px;
  background-color: ${COLORS.PRIMARY};
  height: 100%;

  ${({ variant }) => {
    switch (variant) {
      case 'beggining':
        return `
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      `;

      case 'present':
        return `
        height: 50%;
        position: relative;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        bottom: 50px;
      `;

      default:
        return '';
    }
  }}
`;

TimeSegment.propTypes = {
  variant: PropTypes.string
};

TimeSegment.defaultProps = {
  variant: 'past'
};
