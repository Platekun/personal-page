import React from 'react';

import { SEO, Layout, Hero } from '../@features';

export default function IndexPage() {
  return (
    <Layout>
      <SEO lang="en" />

      <Hero />
    </Layout>
  );
}
