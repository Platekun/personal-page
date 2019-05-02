import React from 'react';
import { withRouter } from 'react-router-dom';
import Observer from '@researchgate/react-intersection-observer';
import styled from '@emotion/styled';
import { space, breakpoints } from '../../@theme';

const SectionLayout = styled.section`
  padding: ${space(8)}px;
  margin: 0 auto;
  max-width: 480px;
  position: relative;

  ${breakpoints.sm.up} {
    padding: ${space(8)}px ${space(12)}px;
    max-width: 768px;
  }

  ${breakpoints.md.up} {
    padding: ${space(16)}px;
    max-width: 940px;
  }

  ${breakpoints.lg.up} {
    max-width: 1264px;
  }

  ${breakpoints.xl.up} {
    padding-top: ${space(22)}px;
    padding-right: ${space(22)}px;
    padding-left: ${space(22)}px;
  }

  @media screen and (min-width: 940px) and (min-height: 1136px) {
    padding-top: ${space(8)}px;
  }
`;

export function SectionBase({ id, location, history, ...rest }) {
  function onObserverChange(event) {
    const shouldUpdateHash = event.isIntersecting && location.hash !== id;

    shouldUpdateHash && history.replace(`#${id}`);
  }

  return (
    <Observer onChange={onObserverChange} threshold={[0.5]}>
      <SectionLayout id={id} {...rest} />
    </Observer>
  );
}

export const Section = withRouter(SectionBase);
