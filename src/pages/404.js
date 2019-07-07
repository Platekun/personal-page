import React from 'react';
import { css } from '@emotion/core';

import { globalStyles } from '../@theme';
import { SEO } from '../@features';
import { Section, SectionTitle, Parragraph, Link } from '../@components/@atoms';

export default function NotFoundPage() {
  return (
    <>
      {globalStyles}

      <SEO />

      <Section
        css={css`
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <div
          css={css`
            text-align: center;
          `}
        >
          <SectionTitle>
            Page not found{' '}
            <span role="img" aria-label="Sad emoji">
              🙁
            </span>
          </SectionTitle>

          <Parragraph>
            You tried to access that currently does not exist️
          </Parragraph>

          <Link to="/">Go home</Link>
        </div>
      </Section>
    </>
  );
}
