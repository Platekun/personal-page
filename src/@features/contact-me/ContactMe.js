import React from 'react';

import {
  Contact,
  LinkedInIcon,
  GithubIcon,
  TwitterIcon
} from '../../@components/@atoms';

export function ContactMe({ appBarVariant }) {
  return (
    <Contact.Section id="contact-me" appBarVariant={appBarVariant}>
      <Contact.Title>Wanna contact me?</Contact.Title>

      <Contact.Message>
        Feel free to contact me using any of these methods
      </Contact.Message>

      <Contact.List>
        <Contact.ListItem>
          <h3 hidden>
            My Email is
            <a href="https://www.linkedin.com/in/carlos-camilo-lobo/">
              https://www.linkedin.com/in/carlos-camilo-lobo/
            </a>
          </h3>

          <a href="https://www.linkedin.com/in/carlos-camilo-lobo/">
            <LinkedInIcon />
          </a>
        </Contact.ListItem>

        <Contact.ListItem>
          <h3 hidden>
            My github is <a href="https://github.com/Platekun">Platekun</a>
          </h3>

          <a href="https://github.com/Platekun">
            <GithubIcon />
          </a>
        </Contact.ListItem>

        <Contact.ListItem>
          <h3 hidden>
            My Twitter is{' '}
            <a href="https://twitter.com/_CamiloLobo">_CamiloLobo</a>
          </h3>

          <a href="https://twitter.com/_CamiloLobo">
            <TwitterIcon />
          </a>
        </Contact.ListItem>
      </Contact.List>
    </Contact.Section>
  );
}
