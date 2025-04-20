import type { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Banner from '../components/banner';
import { StaticImage } from 'gatsby-plugin-image';

const RoomsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="pt-(--navbar-height) min-h-screen">
        {/* Banner Section */}
        <Banner
          renderImage={() => (
            <StaticImage
              className="w-full h-full object-cover"
              src={'../images/livingroom.jpg'}
              alt={'about banner'}
              placeholder="blurred"
            />
          )}
          titleText="房型介紹"
        />
      </div>
    </Layout>
  );
};

export default RoomsPage;
