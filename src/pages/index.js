import React from 'react';

import { SEO, Layout, Hero, AboutMe } from '../@features';

export default function IndexPage() {
  return (
    <Layout>
      <SEO />

      <Hero />
      <AboutMe />
    </Layout>
  );
}
