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
import { AppBarContextProvider } from '../@components/@contexts';

export default function IndexPage() {
  return (
    <AppBarContextProvider>
      <Layout>
        <HeroComponent appBarVariant="inverted" />
        <AboutMe appBarVariant="normal" />
        <WorkExperience appBarVariant="normal" />
        <Skills appBarVariant="normal" />
        <FavoriteTools appBarVariant="inverted" />
        <ContactMe appBarVariant="normal" />
      </Layout>
    </AppBarContextProvider>
  );
}
