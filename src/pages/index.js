import React from 'react';

import {
  SEO,
  Layout,
  Hero,
  AboutMe,
  WorkExperience,
  WhatIDo
} from '../@features';

export default function IndexPage() {
  return (
    <Layout>
      <SEO />
      <Hero />
      <AboutMe />
      <WorkExperience />
      <WhatIDo />
    </Layout>
  );
}
