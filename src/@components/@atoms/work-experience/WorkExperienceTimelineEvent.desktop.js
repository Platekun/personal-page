import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { COLORS } from '../../../@theme';

export const TimelineEvent = styled.div`
  width: 5px;
  height: 65px;
  background-color: ${COLORS.PRIMARY};
  transform: rotate(270deg);
  position: relative;
  top: 65%;
  border-radius: 5px;

  ${({ variant }) => {
    switch (variant) {
      case 'past':
        return `
          top: 30%;
          opacity: 0.1;
        `;

      default:
        return ``;
    }
  }}
`;

TimelineEvent.propTypes = {
  variant: PropTypes.string
};

TimelineEvent.defaultProps = {
  variant: 'past'
};
