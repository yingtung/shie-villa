import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Button } from '@headlessui/react';
import { Link } from 'gatsby';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="relative w-full h-screen">
        <StaticImage
          src="../images/cover.jpg"
          alt="Cover Image"
          className="absolute w-full h-full object-cover"
          style={{ filter: 'brightness(0.5)' }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-7xl md:text-8xl font-bold mb-4 birthstone-regular">
            Shie Villa
          </h1>
          {/* <h2 className="text-white text-2xl md:text-3xl mb-6">
            您的雲林民宿首選
          </h2>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            歇Shie Villa，以20人包棟形式提供住宿空間，和一般單間房型的民宿不同，
            這裡的空間是「整棟專屬」，讓你的旅行真正成為一次深刻的團聚。
          </p> */}
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="p-8 md:p-16 md:basis-1/2">
          <StaticImage
            src="../images/test01.jpg"
            alt="Demo image"
            className="border-color border-6 rounded-md"
          />
        </div>
        <div className="p-8 md:p-16 md:basis-1/2">
          <h1 className="text-4xl md:text-5xl">關於歇Shie Villa</h1>
          <p className="my-8">
            歇Shie Villa，以20人包棟形式提供住宿空間，和一般單間房型的民宿不同，
            這裡的空間是「整棟專屬」，讓你的旅行真正成為一次深刻的團聚。
            我們希望帶給旅客在忙碌的城市中能夠在這「歇息」一下，放鬆身心靈且充電後獲得滿滿能量，再繼續努力生活、快樂生活。
          </p>
          <Link to="/about">
            <Button className="py-2 px-4 text-sm">View More</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>歇Shie Villa民宿 - 雲林虎尾包棟住宿首選</title>
);
