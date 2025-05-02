import React, { useEffect } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Carousel from '../components/carousel';
import ViewMoreButton from '../components/viewMoreButton';

const SectionTitle: React.FC<{ titleText: string }> = ({ titleText }) => {
  return (
    <h1 className="text-3xl md:text-4xl underline decoration-[#CCDEE0] text-center">
      {titleText}
    </h1>
  );
};

const scrollToAbout = () => {
  const aboutSection = document.getElementById('about-section');
  const navbar = document.querySelector('nav');
  const navbarHeight = navbar ? navbar.offsetHeight : 0;

  if (aboutSection) {
    const yOffset = -navbarHeight;
    const y =
      aboutSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const IndexPage: React.FC<PageProps> = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <Layout>
      <div className="relative w-full h-screen">
        <StaticImage
          src="../images/cover.jpg"
          alt="Cover Image"
          className="absolute w-full h-full object-cover"
          style={{ filter: 'brightness(0.9)' }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1
            className="text-white text-5xl md:text-6xl font-bold mb-4 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={scrollToAbout}
          >
            歇Shie Villa
          </h1>
          <h2 className="text-white overline">雲林虎尾包棟住宿首選</h2>
        </div>
      </div>
      {/* About section */}
      <div id="about-section" className="flex flex-col md:flex-row">
        <div className="p-8 md:p-16 md:basis-1/2">
          <StaticImage
            src="../images/test01.jpg"
            alt="Demo image"
            className="border-(--border-color) border-base"
          />
        </div>
        <div className="p-8 md:p-16 md:basis-1/2 self-center">
          <SectionTitle titleText="關於歇Shie Villa" />
          <h2 className="text-[#114b5f] my-8 text-center">
            獨棟｜別墅｜庭院｜歡唱
          </h2>
          <p className="my-8">
            歇Shie Villa，提供可容納 20
            人的整棟包棟住宿，打造全然專屬的團聚時光。在您忙碌的生活中，歇Shie
            Villa
            是讓您徹底放鬆身心、充電再出發的寧靜空間。盡情享受泳池的清涼、卡拉
            OK 的歡唱，以及為親子家庭準備的遊樂空間。在歇Shie Villa
            歇息後，再次充滿能量，迎接生活中的美好！
          </p>
          <div className="flex justify-center">
            <ViewMoreButton linkTo="/about" />
          </div>
        </div>
      </div>
      {/* Rooms section */}
      <div className="flex flex-col md:flex-row bg-(--background-color)">
        <div className="p-8 md:p-16 md:basis-1/2 self-center">
          <SectionTitle titleText="精選房型" />
          <p className="my-8">
            歇Shie Villa，以20人包棟形式提供住宿空間，和一般單間房型的民宿不同，
            這裡的空間是「整棟專屬」，讓你的旅行真正成為一次深刻的團聚。
            我們希望帶給旅客在忙碌的城市中能夠在這「歇息」一下，放鬆身心靈且充電後獲得滿滿能量，再繼續努力生活、快樂生活。
          </p>
          <div className="flex justify-center">
            <ViewMoreButton linkTo="/rooms" />
          </div>
        </div>
        <div className="p-8 md:p-16 md:basis-1/2 md:order-last order-first">
          <Carousel autoplay autoplayInterval={5000} height={96}>
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
          <SectionTitle titleText="民宿設施" />
          <div className="flex flex-col md:flex-row justify-spaces my-8">
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-center my-2 md:order-first order-last">
                戶外泳池
              </h2>
              <StaticImage
                src="../images/pool.jpg"
                alt="Slide 1"
                className="x-full h-full object-cover border-base border-[#F7DFF4]"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <StaticImage
                src="../images/playground.jpg"
                alt="Slide 2"
                className="x-full h-full object-cover border-base border-[#61A1AB]"
              />
              <h2 className="text-center my-2 ">親子遊樂空間</h2>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-center my-2 md:order-first order-last">
                電動麻將桌
              </h2>
              <StaticImage
                src="../images/love.jpg"
                alt="Slide 3"
                className="x-full h-full object-cover border-base border-[#ef6f6c]"
              />
            </div>
          </div>
          <div className="flex justify-center py-8">
            <ViewMoreButton linkTo="/facilities" />
          </div>
        </div>
        {/* Location section */}
        <div className="flex flex-col bg-(--background-color)">
          <div className="p-8 md:p-16">
            <SectionTitle titleText="交通位置" />
            <div className="flex justify-center my-8">
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.0652872841893!2d120.41951677556327!3d23.70936247869836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346eb19a93072973%3A0x4fea993fcaeb3e9e!2z5q2HU2hpZSBWaUxMQS3pm7LmnpfljIXmo5_msJHlrr8!5e0!3m2!1szh-TW!2stw!4v1744968710441!5m2!1szh-TW!2stw"
                width="1200"
                height="500"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>歇Shie Villa民宿 - 雲林虎尾包棟住宿首選</title>
);
