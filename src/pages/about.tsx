import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { getImage, IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import Banner from '../components/banner';

export const query = graphql`
  query {
    file: file(relativePath: { eq: "livingroom.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

interface AboutPageProps extends PageProps {
  data: {
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
  const img = getImage(data.file?.childImageSharp?.gatsbyImageData);
  if (!img) return null;
  return (
    <Layout>
      <div className="pt-(--navbar-height) min-h-screen">
        {/* Banner Section */}
        <Banner image={img} titleText="關於我們" />
        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="space-y-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">
                歡迎來到歇 Villa，您的「歇息」之地
              </h2>
              <p className="text-md leading-relaxed">
                我們深知在忙碌喧囂的城市生活中，片刻的寧靜與放鬆是如此珍貴。
                <br />
                我們希望帶給每一位旅客一個能夠「歇息」的避風港，
                <br />
                讓您徹底放鬆身心靈，拋開煩憂。
                <br />
                在歇 Villa充飽電後，願您能再次充滿能量，
                <br />
                以更積極的姿態繼續努力生活，享受每一份快樂！
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4 self-center">
                <h3 className="text-2xl font-semibold text-center">
                  與親友盡情歡聚，釋放活力時光
                </h3>
                <p className="text-md leading-relaxed text-center ">
                  在這裡，您可以盡情享受與親友的歡聚時光，
                  <br />
                  一同在寬敞的泳池中暢游，釋放活力。
                  <br />
                  在歡樂的夜晚，透過專業的卡拉 OK 設備，盡情歌唱。
                </p>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <StaticImage
                  className="w-full h-full object-cover"
                  src="../images/pool.jpg"
                  alt="swimming pool"
                  placeholder="blurred"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative h-64 rounded-lg overflow-hidden order-2 md:order-1">
                <StaticImage
                  className="w-full h-full object-cover"
                  src="../images/slide.jpg"
                  alt="海港風景"
                  placeholder="blurred"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2 self-center">
                <h3 className="text-2xl font-semibold text-center">
                  大手牽小手，共創歡樂回憶
                </h3>
                <p className="text-md leading-relaxed text-center">
                  歇 Villa為親子出遊的家庭打造了專屬的親子遊樂空間，
                  <br />
                  讓孩子們能夠盡情玩耍，大人也能安心享受悠閒時光。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
