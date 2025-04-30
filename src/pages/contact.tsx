import { graphql, type PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
export const query = graphql`
  query AllRoomsQuery {
    allSanityRoom {
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
interface Asset {
  asset: {
    gatsbyImageData: IGatsbyImageData;
  };
}

interface ContactPageProps extends PageProps {
  data: {
    allSanityRoom: {
      nodes: {
        images: Asset[];
        name: string;
        slug: {
          current: string;
        };
      }[];
    };
  };
}

const ContactPage: React.FC<ContactPageProps> = ({ data }) => {
  const rooms = data.allSanityRoom.nodes;
  return (
    <Layout>
      <div className="pt-(--navbar-height) min-h-screen">
        <h1>Contact page</h1>
        {rooms.map((room) => {
          const roomImg = getImage(room.images[0]?.asset.gatsbyImageData);
          if (!roomImg) return <p>NO PICTURE</p>;
          return (
            <div>
              <h2>{room.slug.current}</h2>
              <GatsbyImage image={roomImg} alt="demo" />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default ContactPage;
