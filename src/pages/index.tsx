import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Button } from '@headlessui/react';
import { Link } from 'gatsby';
import Carousel from '../components/carousel';
import ViewMoreButton from '../components/viewMoreButton';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="relative w-full h-screen">
        <StaticImage
          src="../images/cover.jpg"
          alt="Cover Image"
          className="absolute w-full h-full object-cover"
          style={{ filter: 'brightness(0.9)' }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-7xl md:text-8xl font-bold mb-4 birthstone-regular">
            Shie Villa
          </h1>
        </div>
      </div>
      {/* About section */}
      <div className="flex flex-col md:flex-row">
        <div className="p-8 md:p-16 md:basis-1/2">
          <StaticImage
            src="../images/test01.jpg"
            alt="Demo image"
            className="border-(--border-color) border-base"
          />
        </div>
        <div className="p-8 md:p-16 md:basis-1/2">
          <h1 className="text-4xl md:text-5xl">關於歇 Villa</h1>
          <h2 className="text-[#114b5f] my-8">獨棟｜別墅｜庭院｜歡唱</h2>
          <p className="my-8">
            歇 Villa，提供可容納 20
            人的整棟包棟住宿，打造全然專屬的團聚時光。在您忙碌的生活中，歇 Villa
            是讓您徹底放鬆身心、充電再出發的寧靜空間。盡情享受泳池的清涼、卡拉
            OK 的歡唱，以及為親子家庭準備的遊樂空間。在歇 Villa
            歇息後，再次充滿能量，迎接生活中的美好！
          </p>
          <ViewMoreButton linkTo="/about" />
        </div>
      </div>
      {/* Rooms section */}
      <div className="flex flex-col md:flex-row bg-(--background-color)">
        <div className="p-8 md:p-16 md:basis-1/2">
          <h1 className="text-4xl md:text-5xl">精選房型</h1>
          <p className="my-8">
            歇 Villa，以20人包棟形式提供住宿空間，和一般單間房型的民宿不同，
            這裡的空間是「整棟專屬」，讓你的旅行真正成為一次深刻的團聚。
            我們希望帶給旅客在忙碌的城市中能夠在這「歇息」一下，放鬆身心靈且充電後獲得滿滿能量，再繼續努力生活、快樂生活。
          </p>
          <ViewMoreButton linkTo="/rooms" />
        </div>
        <div className="p-8 md:p-16 md:basis-1/2 md:order-last order-first">
          <Carousel autoplay autoplayInterval={5000}>
            <StaticImage
              src="../images/demo01.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            <StaticImage
              src="../images/demo02.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <StaticImage
              src="../images/demo03.jpg"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
            <StaticImage
              src="../images/demo04.jpg"
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </Carousel>
        </div>
      </div>
      {/* Facilities section */}
      <div className="flex flex-col">
        <div className="p-8 md:p-16">
          <h1 className="text-4xl md:text-5xl text-center">民宿設施</h1>
          <div className="flex flex-row justify-spaces my-8">
            <div className="p-4 flex-1">
              <h2 className="text-center my-2">戶外泳池</h2>
              <StaticImage
                src="../images/pool.jpg"
                alt="Slide 1"
                className="x-full h-full object-cover border-base border-[#61A1AB]"
              />
            </div>
            <div className="p-4 flex-1">
              <StaticImage
                src="../images/playground.jpg"
                alt="Slide 2"
                className="x-full h-full object-cover border-base border-[#F7DFF4]"
              />
              <h2 className="text-center my-2">親子遊樂空間</h2>
            </div>
            <div className="p-4 flex-1">
              <h2 className="text-center my-2">電動麻將桌</h2>
              <StaticImage
                src="../images/love.jpg"
                alt="Slide 3"
                className="x-full h-full object-cover border-base border-(--color-highlight)"
              />
            </div>
          </div>
          <div className="flex justify-center py-8">
            <ViewMoreButton linkTo="/facilities" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>歇 Villa民宿 - 雲林虎尾包棟住宿首選</title>
);
