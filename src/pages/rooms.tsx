import type { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const RoomsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="w-full h-full flex justify-center align-center">
        <h1>Rooms page</h1>
      </div>
    </Layout>
  );
};

export default RoomsPage;
