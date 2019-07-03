import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { space, breakpoints } from '../../../@theme';

export const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${space(5)}px;

  opacity: ${({ variant }) => {
    switch (variant) {
      case 'present':
        return 1;

      default:
        return 0.4;
    }
  }};

  ${breakpoints.lg} {
    margin-top: unset;
  }
`;

JobDetails.propTypes = {
  variant: PropTypes.string
};

JobDetails.defaultProps = {
  variant: 'past'
};
