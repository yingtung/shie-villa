import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Banner from '../components/banner';
import formatDate from '../utils/formatDate';
import { PortableText } from '@portabletext/react';
import components from '../components/protableTextComponents';

interface NewProps {
  data: {
    sanityNews: {
      title: string;
      slug: {
        current: string;
      };
      publishedAt: string;
      coverImage: {
        asset: {
          gatsbyImageData: IGatsbyImageData;
          altText: string;
        };
      };
      _rawContent: any;
    };
  };
  pageContext: {
    id: string;
    slug: string;
  };
}

const NewsDetails: React.FC<NewProps> = ({ data }) => {
  const { sanityNews } = data;
  const image = getImage(sanityNews.coverImage?.asset.gatsbyImageData);

  return (
    <Layout>
      <Banner titleText="最新消息" />
      <div className="max-w-5xl mx-auto px-6 py-16">
        <article className="prose prose-lg max-w-none">
          {image && (
            <div className="mb-8 w-full relative h-100">
              <GatsbyImage
                image={image}
                alt={sanityNews.coverImage.asset.altText}
                className="rounded-lg x-full h-full object-cover"
                imgStyle={{ objectPosition: 'center', objectFit: 'scale-down' }}
              />
            </div>
          )}
          <h1 className="text-3xl font-bold mb-2">{sanityNews.title}</h1>
          <div className="text-gray-500 mb-4">
            {formatDate(sanityNews.publishedAt)}
          </div>
          <div className="prose prose-lg">
            <PortableText
              value={sanityNews._rawContent}
              components={components}
            />
          </div>
        </article>
        <Link to="/news">
          <button className="py-2 px-4 text-lg">返回消息列表</button>
        </Link>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query NewsBySlug($id: String!) {
    sanityNews(id: { eq: $id }) {
      id
      title
      slug {
        current
      }
      publishedAt
      coverImage {
        asset {
          gatsbyImageData(width: 1000, placeholder: NONE, formats: [AUTO, WEBP])
          altText
        }
      }
      _rawContent
    }
  }
`;

export default NewsDetails;
