import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Banner from '../components/banner';
import Carousel from '../components/carousel';

interface RoomProps {
  data: {
    sanityRoom: {
      name: string;
      images: {
        asset: {
          gatsbyImageData: IGatsbyImageData;
        };
      }[]; // Adjust type as needed
      description: {
        children: {
          text: string;
        }[];
      }[];
    };
    banner: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
  pageContext: {
    slug: string;
  };
}

const RoomDetails: React.FC<RoomProps> = ({ data, pageContext }) => {
  const { sanityRoom } = data;
  const bannerImg = getImage(data.banner?.childImageSharp?.gatsbyImageData);
  console.log(`DDD ${sanityRoom.description[1].children[0].text}`);

  return (
    <Layout>
      {bannerImg && <Banner image={bannerImg} titleText="房型介紹" />}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {sanityRoom.images.length > 0 && (
          <div>
            <Carousel withThumbnail hasBorder={false} height={112}>
              {sanityRoom.images.map((roomImage) => {
                const image = getImage(roomImage?.asset);
                if (!image) return null;
                return (
                  <GatsbyImage
                    image={image}
                    alt={sanityRoom.name}
                    className="rounded-md x-full h-full object-cover"
                  />
                );
              })}
            </Carousel>
          </div>
        )}
        <h1>{sanityRoom.name}</h1>
        {sanityRoom.description.map((d, index) => {
          if (index === 0)
            return (
              <div className="py-4">
                <p>{d.children[0].text}</p>
              </div>
            );
          return <p>&#x2022; {d.children[0].text}</p>;
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    sanityRoom(slug: { current: { eq: $slug } }) {
      name
      id
      images {
        asset {
          gatsbyImageData
        }
      }
      description {
        children {
          text
        }
      }
    }
    banner: file(relativePath: { eq: "livingroom.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

export default RoomDetails;
