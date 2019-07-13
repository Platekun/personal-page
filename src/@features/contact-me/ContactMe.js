import React from 'react';

import {
  LinkedInIcon,
  GithubIcon,
  TwitterIcon,
  SectionTitle,
  Parragraph
} from '../../@components/@atoms';
import styles from './ContactMe.module.css';

export function ContactMe() {
  return (
    <section className={styles.contactMe}>
      <SectionTitle className={styles.title}>Wanna contact me?</SectionTitle>

      <Parragraph className={styles.message}>
        Feel free to contact me using any of these methods
      </Parragraph>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <h3 hidden>
            My LinkedIn is
            <a href="https://www.linkedin.com/in/carlos-camilo-lobo/">
              https://www.linkedin.com/in/carlos-camilo-lobo/
            </a>
          </h3>

          <a href="https://www.linkedin.com/in/carlos-camilo-lobo/">
            <LinkedInIcon />
          </a>
        </li>

        <li className={styles.listItem}>
          <h3 hidden>
            My github is <a href="https://github.com/Platekun">Platekun</a>
          </h3>

          <a href="https://github.com/Platekun">
            <GithubIcon />
          </a>
        </li>

        <li className={styles.listItem}>
          <h3 hidden>
            My Twitter is{' '}
            <a href="https://twitter.com/_CamiloLobo">_CamiloLobo</a>
          </h3>

          <a href="https://twitter.com/_CamiloLobo">
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </section>
  );
}
