import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Banner from "../components/banner";

interface RoomProps {
  data: {
    sanityRoom: {
      name: string;
      images: any; // Adjust type as needed
      details: any; // Raw Portable Text content
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
  const image = getImage(sanityRoom?.images[0]?.asset);

  return (
    <Layout>
      {bannerImg && <Banner image={bannerImg} titleText="房型介紹" />}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {image && (
          <GatsbyImage
            image={image}
            alt={sanityRoom.name}
            className="rounded-lg "
          />
        )}
        <h1>{sanityRoom.name}</h1>
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
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

export default RoomDetails;
