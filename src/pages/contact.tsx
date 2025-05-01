import { graphql, type PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  StaticImage,
} from 'gatsby-plugin-image';
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
        <div className="grid grid-cols-1 md:grid-cols-2  pt-8">
          <div className="justify-items-center pt-2">
            <StaticImage
              src={'../images/fbQrCode.png'}
              alt={'FB QR code'}
              height={160}
            />
            <h3>FB 粉絲專頁QR Code</h3>
          </div>
          <div className="justify-items-center pt-2">
            <StaticImage
              src={'../images/igQrCode.jpg'}
              alt={'IG QR code'}
              height={160}
            />
            <h3>IG 粉絲專頁QR Code</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
