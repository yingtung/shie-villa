import React from 'react';
import { graphql, Link } from 'gatsby';
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
  };
  pageContext: {
    slug: string;
  };
}

const RoomDetails: React.FC<RoomProps> = ({ data }) => {
  const { sanityRoom } = data;

  return (
    <Layout>
      <div className="pt-(--navbar-height) min-h-screen bg-gray-50">
        <Banner titleText={'房型介紹'} />
        <div className="max-w-5xl mx-auto px-6 py-16">
          {sanityRoom.images.length > 0 && (
            <div>
              <Carousel withThumbnail hasBorder={false} height={145}>
                {sanityRoom.images.map((roomImage) => {
                  const image = getImage(roomImage?.asset);
                  if (!image) return null;
                  return (
                    <GatsbyImage
                      image={image}
                      alt={sanityRoom.name}
                      className="max-w-full max-h-full w-auto h-auto"
                      imgStyle={{
                        objectFit: 'scale-down',
                        objectPosition: 'center',
                      }}
                    />
                  );
                })}
              </Carousel>
            </div>
          )}
          <h1>{sanityRoom.name}</h1>
          {sanityRoom.description.map((d) => {
            const text = d.children[0].text.trim();
            return text ? <p>&#x2022; {text}</p> : null;
          })}
          <div className="mt-4">
            <Link to="/rooms">
              <button className="py-2 px-4">返回</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query RoomBySlug($slug: String!) {
    sanityRoom(slug: { current: { eq: $slug } }) {
      name
      id
      images {
        asset {
          gatsbyImageData(
            width: 900
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      description {
        children {
          text
        }
      }
    }
  }
`;

export default RoomDetails;
