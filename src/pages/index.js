import React from 'react';

import {
  Layout,
  HeroComponent,
  AboutMe,
  WorkExperience,
  Skills,
  FavoriteTools,
  ContactMe
} from '../@features';

export default function IndexPage() {
  return (
    <Layout>
      <HeroComponent appBarVariant="inverted" />
      <AboutMe appBarVariant="normal" />
      <WorkExperience appBarVariant="normal" />
      <Skills appBarVariant="normal" />
      <FavoriteTools appBarVariant="inverted" />
      <ContactMe appBarVariant="normal" />
    </Layout>
  );
}
