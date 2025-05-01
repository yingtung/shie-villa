import type { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const FacilitiesPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="pt-(--navbar-height) min-h-screen">
        <h1>Facilities page</h1>
      </div>
    </Layout>
  );
};

export default FacilitiesPage;
