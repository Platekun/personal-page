import styled from '@emotion/styled';

export const CoreValues = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 348px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 50%;
  }

  @media screen and (min-width: 940px) {
    height: unset;
    margin: unset;
    max-width: unset;
    width: 100%;
    display: block;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translateX(-50%);
  }
`;
