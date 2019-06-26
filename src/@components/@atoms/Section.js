import React from 'react';
import { withRouter } from 'react-router-dom';
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

export function SectionBase({ id, location, history, appBarVariant, ...rest }) {
  const { setNormal, setInverted } = React.useContext(AppBarContext);
  const { height } = useWindowSize();

  function onObserverChange(event) {
    const shouldUpdateHash = event.isIntersecting && location.hash !== id;

    if (shouldUpdateHash) {
      history.replace(`#${id}`);

      if (height < 940) {
        if (appBarVariant === 'normal') {
          setNormal();
        } else if (appBarVariant === 'inverted') {
          setInverted();
        }
      }
    }
  }

  return (
    <Observer onChange={onObserverChange} threshold={[0.5]}>
      <SectionLayout id={id} {...rest} />
    </Observer>
  );
}

export const Section = withRouter(SectionBase);
