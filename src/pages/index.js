import React from 'react';

import { SEO, Layout, Hero, AboutMe, WorkExperience } from '../@features';

export default function IndexPage() {
  return (
    <Layout>
      <SEO />
      <Hero />
      <AboutMe />
      <WorkExperience />
    </Layout>
  );
}
