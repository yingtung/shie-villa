import { graphql, type PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Banner from '../components/banner';
export const query = graphql`
  query {
    allSanityFacility(sort: { order: ASC }) {
      nodes {
        name
        slug {
          current
        }
        image {
          asset {
            gatsbyImageData
          }
        }
        description
      }
    }
  }
`;

interface FacilitiesPageProps extends PageProps {
  data: {
    banner: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
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
          _key: string; // Unique key for each image in the array (optional, but useful for React keys
        };
        description: string;
      }[];
    };
  };
}
const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ data }) => {
  const facilities = data.allSanityFacility.nodes;
  return (
    <Layout>
      <div className="pt-(--navbar-height) min-h-screen">
        {/* Banner Section */}
        <Banner titleText="民宿設施" />
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {facilities.length > 0 &&
              facilities.map((facility) => {
                const facilityImg = getImage(
                  facility.image?.asset.gatsbyImageData,
                );
                if (!facilityImg) return null;
                return (
                  <div>
                    <div className="h-48 py-2">
                      <GatsbyImage
                        image={facilityImg}
                        alt={facility.name}
                        className="w-full h-full rounded-lg"
                      />
                    </div>
                    <div>
                      <h1>{facility.name}</h1>
                      <p className="py-2 mb-4">{facility.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FacilitiesPage;
