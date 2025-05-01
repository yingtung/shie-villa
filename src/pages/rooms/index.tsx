import { graphql, Link, type PageProps } from 'gatsby';
import React from 'react';
import Layout from '../../components/layout';
import Banner from '../../components/banner';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
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
    allSanityRoom(sort: { slug: { current: ASC } }) {
      nodes {
        name
        slug {
          current
        }
        images {
          asset {
            gatsbyImageData(
              width: 400
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
          _key # Unique key for each image in the array (optional, but useful for React keys)
        }
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
    allSanityRoom: {
      nodes: {
        name: string;
        slug: {
          current: string;
        };
        images: {
          asset: {
            gatsbyImageData: IGatsbyImageData;
          };
          _key: string; // Unique key for each image in the array (optional, but useful for React keys
        }[];
      }[];
    };
  };
}

const RoomsPage: React.FC<RooomsPageProps> = ({ data }) => {
  const bannerImg = getImage(data.banner?.childImageSharp?.gatsbyImageData);
  const rooms = data.allSanityRoom.nodes;
  return (
    <Layout>
      <div className="pt-(--navbar-height) min-h-screen">
        {/* Banner Section */}
        {bannerImg && <Banner image={bannerImg} titleText="房型介紹" />}
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {rooms.length > 0 &&
              rooms.map((room) => {
                const roomImg = getImage(room.images[0]?.asset.gatsbyImageData);
                if (!roomImg) return null;
                return (
                  <Link to={room.slug.current}>
                    <div className="relative rounded-lg overflow-hidden group">
                      <GatsbyImage
                        image={roomImg}
                        alt="room 101"
                        className="w-full h-full transition-transform duration-300 group-hover:scale-120"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer">
                        <span className="text-4xl font-bold text-white">
                          {room.name}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RoomsPage;
