import { graphql, type PageProps } from 'gatsby';
import React from 'react';
import Layout from '../../components/layout';
import Banner from '../../components/banner';
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  StaticImage,
} from 'gatsby-plugin-image';
export const query = graphql`
  query {
    banner: file(relativePath: { eq: "livingroom.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    room1: file(relativePath: { eq: "demo01.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    room2: file(relativePath: { eq: "demo02.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    room3: file(relativePath: { eq: "demo03.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    room4: file(relativePath: { eq: "demo04.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    room5: file(relativePath: { eq: "demo05.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    room6: file(relativePath: { eq: "livingroom.jpg" }) {
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

interface RooomsPageProps extends PageProps {
  data: {
    banner: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
    room1: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
    room2: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
    room3: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
    room4: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
    room5: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
    room6: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}
const RoomsPage: React.FC<RooomsPageProps> = ({ data }) => {
  const bannerImg = getImage(data.banner?.childImageSharp?.gatsbyImageData);
  const room1 = getImage(data.room1?.childImageSharp?.gatsbyImageData);
  const room2 = getImage(data.room2?.childImageSharp?.gatsbyImageData);
  const room3 = getImage(data.room3?.childImageSharp?.gatsbyImageData);
  const room4 = getImage(data.room4?.childImageSharp?.gatsbyImageData);
  const room5 = getImage(data.room5?.childImageSharp?.gatsbyImageData);
  const room6 = getImage(data.room6?.childImageSharp?.gatsbyImageData);
  if (!bannerImg || !room1 || !room2 || !room3 || !room4 || !room5 || !room6)
    return null;
  return (
    <Layout>
      <div className="pt-(--navbar-height) min-h-screen">
        {/* Banner Section */}
        <Banner image={bannerImg} titleText="房型介紹" />
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Room 101 */}
            <div className="relative rounded-lg overflow-hidden group">
              <GatsbyImage
                image={room1}
                alt="room 101"
                className="w-full h-full transition-transform duration-300 group-hover:scale-120"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer">
                <span className="text-4xl font-bold text-white">101</span>
              </div>
            </div>
            {/* Room 102 */}
            <div className="relative rounded-lg overflow-hidden group">
              <GatsbyImage
                image={room2}
                alt="room 102"
                className="w-full h-full transition-transform duration-300 group-hover:scale-120"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer">
                <span className="text-4xl font-bold text-white">102</span>
              </div>
            </div>
            {/* Room 201 */}
            <div className="relative rounded-lg overflow-hidden group">
              <GatsbyImage
                image={room3}
                alt="room 201"
                className="w-full h-full transition-transform duration-300 group-hover:scale-120"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer">
                <span className="text-4xl font-bold text-white">201</span>
              </div>
            </div>
            {/* Room 202 */}
            <div className="relative rounded-lg overflow-hidden group">
              <GatsbyImage
                image={room4}
                alt="room 202"
                className="w-full h-full transition-transform duration-300 group-hover:scale-120"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer">
                <span className="text-4xl font-bold text-white">202</span>
              </div>
            </div>
            {/* Room 203 */}
            <div className="relative rounded-lg overflow-hidden group">
              <GatsbyImage
                image={room5}
                alt="room 203"
                className="w-full h-full transition-transform duration-300 group-hover:scale-120"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer">
                <span className="text-4xl font-bold text-white">203</span>
              </div>
            </div>
            {/* Room 204 */}
            <div className="relative rounded-lg overflow-hidden group">
              <GatsbyImage
                image={room6}
                alt="room 204"
                className="w-full h-full transition-transform duration-300 group-hover:scale-120"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer">
                <span className="text-4xl font-bold text-white">204</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RoomsPage;
