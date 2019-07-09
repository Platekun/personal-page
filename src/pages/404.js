import React from 'react';

import styles from './404.module.css';

import { SEO } from '../@features';
import { Section, SectionTitle, Parragraph, Link } from '../@components/@atoms';

export default function NotFound() {
  return (
    <>
      <SEO />

      <Section className={styles.notFound}>
        <div className={styles.notFoundContent}>
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
