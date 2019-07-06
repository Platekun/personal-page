import React from 'react';
import Observer from '@researchgate/react-intersection-observer';
import styled from '@emotion/styled';
import useWindowSize from 'react-use/lib/useWindowSize';

import { space, breakpoints } from '../../@theme';
import { AppBarContext } from '../@contexts';

const SectionLayout = styled.section`
  padding: ${space(8)}px;
  margin: 0 auto;
  max-width: 480px;
  position: relative;

  ${breakpoints.sm} {
    padding: ${space(8)}px ${space(12)}px;
    max-width: 768px;
  }

  ${breakpoints.md} {
    padding: ${space(8)}px ${space(16)}px;
    max-width: 940px;
  }

  ${breakpoints.lg} {
    max-width: 1264px;
  }

  ${breakpoints.xl} {
    padding-top: ${space(11)}px;
    padding-right: ${space(22)}px;
    padding-left: ${space(22)}px;
  }

  ${breakpoints.t1} {
    padding-top: ${space(8)}px;
    padding-bottom: ${space(8)}px;
  }
`;

export function Section({ id, appBarVariant, ...rest }) {
  const { setNormal, setInverted } = React.useContext(AppBarContext);
  const { width } = useWindowSize();

  function onObserverChange(event) {
    const shouldUpdateHash =
      event.isIntersecting && window.location.hash !== id;
    if (shouldUpdateHash) {
      window.history.replaceState(null, null, `#${id}`);
      if (width < 940) {
        if (appBarVariant === 'normal') {
          setNormal();
        } else if (appBarVariant === 'inverted') {
          setInverted();
        }
      }
    }
  }

  return id ? (
    <Observer onChange={onObserverChange} threshold={[0.5]}>
      <SectionLayout id={id} {...rest} />
    </Observer>
  ) : (
    <SectionLayout {...rest} />
  );
}
