import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { space, COLORS } from '../../../@theme';

export const ListItem = styled.li`
  cursor: pointer;

  &:hover {
    color: ${COLORS.ACCENT};
  }

  ${({ align, idx, size }) => {
    switch (align) {
      case 'vertical':
        return `height: ${space(18)}px;`;
      case 'horizontal':
        return `
        margin: 0 calc(${space(7)}px / 2);

        ${
          idx === 0
            ? 'margin-left: 0;'
            : idx === size - 1
            ? 'margin-right: 0;'
            : ''
        };
      `;

      default:
        return '';
    }
  }}
`;

ListItem.propTypes = {
  align: PropTypes.oneOf(['vertical', 'horizontal']).isRequired
};
