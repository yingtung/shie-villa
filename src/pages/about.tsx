import type { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>About page</h1>
    </Layout>
  );
};

export default AboutPage;
