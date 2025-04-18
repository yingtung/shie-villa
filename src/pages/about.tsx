import type { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="pt-[80px]">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center ">
          歇 Villa
        </h1>
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg leading-relaxed">
            歇 Villa，以可容納 20
            人的包棟形式提供寬敞舒適的住宿空間，與一般單間房型的民宿截然不同。在這裡，你享有的是「整棟專屬」的私密空間，讓你的旅行不再被打擾，真正成為一次深刻且難忘的團聚。
            <br />
            <br />
            我們深知在忙碌喧囂的城市生活中，片刻的寧靜與放鬆是如此珍貴。 歇
            Villa
            正是為此而生，我們希望帶給每一位旅客一個能夠「歇息」的避風港，讓您徹底放鬆身心靈，拋開煩憂。在這裡，您可以盡情享受與親友的歡聚時光，一同在寬敞的泳池中暢游，釋放活力。在歡樂的夜晚，透過專業的卡拉
            OK 設備，盡情歌唱，留下美好回憶。 不僅如此，歇 Villa
            也貼心為親子出遊的家庭打造了專屬的親子遊樂空間，讓孩子們能夠盡情玩耍，大人也能安心享受悠閒時光。
            <br />
            <br />
            在歇
            Villa充飽電後，願您能再次充滿能量，以更積極的姿態繼續努力生活，享受每一份快樂！
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
