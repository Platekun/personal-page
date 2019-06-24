import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { space } from '../../../@theme';

export const ListItem = styled.li`
  ${({ align, idx, size }) => {
    switch (align) {
      case 'vertical':
        return `
        margin: calc(${space(7)}px / 2) 0;
        text-align: center;

        ${
          idx === 0
            ? 'margin-top: 0;'
            : idx === size - 1
            ? 'margin-bottom: 0;'
            : ''
        };
      `;

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
        throw new Error('Unsupported ListItem align type');
    }
  }}
`;

ListItem.propTypes = {
  align: PropTypes.oneOf(['vertical', 'horizontal']).isRequired
};
