import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export const List = styled.ul`
  width: inherit;
  display: flex;

  ${({ align }) => {
    switch (align) {
      case 'vertical':
        return `
        flex-direction: column;
      `;

      case 'horizontal':
        return `
        flex-direction: row;
      `;

      default:
        throw new Error('Unsupported align List type');
    }
  }}
`;

List.propTypes = {
  align: PropTypes.oneOf(['vertical', 'horizontal']).isRequired
};
