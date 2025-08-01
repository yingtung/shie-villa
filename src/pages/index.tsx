import React, { useEffect } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Carousel from '../components/carousel';
import ViewMoreButton from '../components/viewMoreButton';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import formatDate from '../utils/formatDate';
import { graphql } from 'gatsby';
import { SEO } from '../components/seo';

interface IndexPageProps extends PageProps {
  data: {
    allSanityNews: {
      nodes: {
        title: string;
        slug: {
          current: string;
        };
        publishedAt: string;
        coverImage: {
          asset: {
            gatsbyImageData: IGatsbyImageData;
            altText: string;
          };
        };
        excerpt: string;
      }[];
    };
    allSanityRoom: {
      nodes: {
        slug: {
          current: string;
        };
        images: {
          asset: {
            gatsbyImageData: IGatsbyImageData;
          };
        }[];
      }[];
    };
    allSanityFacility: {
      nodes: {
        name: string;
        slug: {
          current: string;
        };
        image: {
          asset: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      }[];
    };
  };
}

export const query = graphql`
  query {
    allSanityFacility(filter: { order: { in: [1, 2, 9] } }) {
      nodes {
        name
        slug {
          current
        }
        image {
          asset {
            gatsbyImageData(
              width: 400
              placeholder: BLURRED
              formats: [AUTO, WEBP]
              aspectRatio: 1.4
            )
            altText
          }
        }
      }
    }
    allSanityRoom(sort: { slug: { current: ASC } }) {
      nodes {
        slug {
          current
        }
        images {
          asset {
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
            altText
          }
        }
      }
    }
    allSanityNews(
      sort: { publishedAt: DESC }
      filter: { hidden: { eq: false } }
      limit: 3
    ) {
      nodes {
        id
        title
        slug {
          current
        }
        publishedAt
        excerpt
        coverImage {
          asset {
            gatsbyImageData(
              width: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
            altText
          }
        }
      }
    }
  }
`;

const SectionTitle: React.FC<{ titleText: string }> = ({ titleText }) => {
  return (
    <h1 className="text-3xl md:text-4xl underline decoration-[#CCDEE0] text-center">
      {titleText}
    </h1>
  );
};

const scrollToFirstSection = () => {
  const aboutSection = document.getElementById('first-section');
  const navbar = document.querySelector('nav');
  const navbarHeight = navbar ? navbar.offsetHeight : 0;

  if (aboutSection) {
    const yOffset = -navbarHeight;
    const y =
      aboutSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const news = data.allSanityNews.nodes;
  const rooms = data.allSanityRoom.nodes;
  const facilities = data.allSanityFacility.nodes;

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
            onClick={scrollToFirstSection}
          >
            歇Shie Villa
          </h1>
          <h2 className="text-white overline">雲林虎尾包棟住宿首選</h2>
        </div>
      </div>

      {/* About section */}
      <div id="first-section" className="flex flex-col md:flex-row ">
        <div className="p-8 md:p-16 md:basis-1/2">
          <StaticImage
            src="../images/dinningTable.jpg"
            alt="歇Shie Villa 民宿"
            className="border-(--border-color) border-base"
          />
        </div>
        <div className="p-8 md:p-16 md:basis-1/2 self-center">
          <SectionTitle titleText="關於歇Shie Villa" />
          <h2 className="text-[#114b5f] my-8 text-center">
            獨棟｜別墅｜庭院｜歡唱
          </h2>
          <p className="my-8">
            歇Shie Villa，提供可容納 26
            人的整棟包棟住宿，打造全然專屬的團聚時光。在您忙碌的生活中，歇Shie
            Villa
            是讓您徹底放鬆身心、充電再出發的寧靜空間。盡情享受泳池的清涼、桌遊與麻將的樂趣，以及為親子家庭準備的遊樂空間。在歇Shie
            Villa 歇息後，再次充滿能量，迎接生活中的美好！
          </p>
          <div className="flex justify-center">
            <ViewMoreButton linkTo="/about" />
          </div>
        </div>
      </div>
      {/* Rooms section */}
      <div className="flex flex-col md:flex-row min-h-120 items-center  bg-(--background-color)">
        <div className="p-8 md:p-16 md:basis-1/2 self-center">
          <SectionTitle titleText="精選房型" />
          <p className="my-8">
            我們共有六間精心設計的客房，包含四間寬敞的四人房，以及兩間溫馨的雙人房。特別的是，我們的雙人房皆設有舒適的閣樓空間，可依您的需求加床，非常適合情侶、朋友或小型家庭入住。無論您是哪種旅行組合，都能在歇
            Villa 找到最適合您的休憩空間。
          </p>
          <div className="flex justify-center">
            <ViewMoreButton linkTo="/rooms" />
          </div>
        </div>
        <div className="p-8 md:p-16 md:basis-1/2 md:order-last order-first">
          <Carousel autoplay autoplayInterval={5000} height={95}>
            {rooms.map((room) => {
              const roomImg = getImage(room.images[0]?.asset.gatsbyImageData);
              return (
                roomImg && (
                  <GatsbyImage
                    image={roomImg}
                    alt={room.slug.current}
                    className="w-full h-full md:h-95 object-cover"
                    imgStyle={{ objectPosition: 'center' }}
                  />
                )
              );
            })}
          </Carousel>
        </div>
      </div>
      {/* Facilities section */}
      <div className="flex flex-col ">
        <div className="p-8 md:p-16">
          <SectionTitle titleText="民宿設施" />
          <div className="flex flex-col md:flex-row justify-spaces my-8">
            {facilities.map((facility, index) => {
              const image = getImage(facility.image?.asset.gatsbyImageData);

              return (
                <div className="p-4 flex-1 flex flex-col">
                  <h2
                    className={`text-center my-2 ${index % 2 === 0 ? 'md:order-first order-last' : 'order-last'}`}
                  >
                    {facility.name}
                  </h2>
                  {image && (
                    <GatsbyImage
                      image={image}
                      alt={facility.slug.current}
                      imgStyle={{ objectPosition: 'center' }}
                      className={
                        'x-full h-full object-cover border-base border-[#ef6f6c]'
                      }
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center py-8">
            <ViewMoreButton linkTo="/facilities" />
          </div>
        </div>
      </div>
      {/* News section */}
      <div className="flex flex-row justify-center w-full bg-(--background-color)">
        <div className="p-8 md:p-16 w-full">
          <SectionTitle titleText="最新消息" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 place-items-center">
            {news.map((n) => {
              const image = getImage(n.coverImage?.asset.gatsbyImageData);
              return (
                <Link
                  to={`/news/${n.slug.current}`}
                  key={n.slug.current}
                  className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 w-72"
                >
                  <div className="h-48 w-full relative">
                    {image && (
                      <GatsbyImage
                        alt={n.coverImage.asset.altText}
                        image={image}
                        className="w-full h-full object-cover"
                        imgStyle={{ objectPosition: 'center' }}
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-(--color-highlight) transition-colors line-clamp-2">
                      {n.title}
                    </h3>
                    <p className="text-sm mb-2">{formatDate(n.publishedAt)}</p>
                    <p className="line-clamp-4">{n.excerpt}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="flex justify-center">
            <ViewMoreButton linkTo="/news" />
          </div>
        </div>
      </div>
      {/* Location section */}
      <div className="flex flex-col ">
        <div className="p-8 md:p-16">
          <SectionTitle titleText="交通位置" />
          <div className="flex justify-center my-8">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.0674544994113!2d120.41938747556323!3d23.709285078698436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346eb1b09224a23b%3A0x64dd24b4ed442949!2z5q2HU2hpZSBWaUxMQS3pm7LmnpfljIXmo5_msJHlrr8!5e0!3m2!1szh-TW!2stw!4v1748241151028!5m2!1szh-TW!2stw"
              width="1200"
              height="500"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
