import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="relative h-screen">
        <StaticImage
          src="../images/cover.jpg"
          alt="Cover Image"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.5)' }} // 可選：調整圖片樣式
        />
        <div className="absolute inset-0 items-center justify-center">
          <h1 className="">HOme page</h1>
          <h2>HOme page</h2>
          <p>test</p>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
