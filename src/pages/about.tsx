import type { HeadFC, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import Banner from '../components/banner';
import { SEO } from '../components/seo';

interface AboutPageProps extends PageProps {
  data: {
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}
const PAGE_TITLE = '關於我們';

const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
  return (
    <Layout>
      <div className="pt-(--navbar-height) min-h-screen">
        {/* Banner Section */}
        <Banner titleText={PAGE_TITLE} />
        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="space-y-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">
                歡迎來到歇Shie Villa，您的「歇腳」之地
              </h2>
              <p className="text-md leading-relaxed">
                我們深知在忙碌喧囂的城市生活中，片刻的寧靜與放鬆是如此珍貴。
                <br />
                我們希望帶給每一位旅客一個能夠「歇息」的避風港，
                <br />
                讓您徹底放鬆身心靈，拋開煩憂。
                <br />
                在歇Shie Villa充飽電後，願您能再次充滿能量，
                <br />
                以更積極的姿態繼續努力生活，享受每一份快樂！
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4 self-center">
                <h3 className="text-2xl font-semibold text-center">
                  與親友獨享整棟 Villa 的自在與歡樂！
                </h3>
                <p className="text-md leading-relaxed text-center ">
                  歇Shie Villa 提供包棟服務，
                  <br />
                  讓您與您的家人朋友擁有完全獨立的空間，
                  <br />
                  盡情享受不受打擾的度假時光。
                  <br />
                  寬敞的客廳、設備齊全的廚房、
                  <br />
                  舒適的臥室，以及豐富的戶外設施，
                  <br />
                  都將成為您們專屬的度假天堂，共創難忘的回憶。
                </p>
              </div>
              <div className="relative h-76 rounded-lg overflow-hidden">
                <StaticImage
                  className="w-full h-full object-cover"
                  src="../images/livingroom.jpg"
                  alt="包棟民宿"
                  placeholder="blurred"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative h-76 rounded-lg overflow-hidden order-2 md:order-1">
                <StaticImage
                  className="w-full h-full rounded-lg"
                  src="../images/childFriendly.jpg"
                  alt="親子友善"
                  placeholder="blurred"
                  imgStyle={{
                    objectPosition: 'bottom',
                  }}
                />
              </div>
              <div className="space-y-6 order-1 md:order-2 self-center">
                <h3 className="text-2xl font-semibold text-center">
                  大手牽小手，共創歡樂回憶
                </h3>
                <p className="text-md leading-relaxed text-center">
                  歇Shie Villa 提供多元的親子設施讓孩子們盡情放電，
                  <br />
                  在戶外遊樂區溜滑梯、攀爬，在沙坑裡發揮創意，
                  <br />
                  晚上還能一起打麻將、玩桌遊。
                  <br />
                  在這裡孩子們能盡情玩耍，
                  <br />
                  大人也能安心放鬆，共享溫馨的親子時光。
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
export const Head: HeadFC = () => <SEO title={PAGE_TITLE} />;
