import { graphql, type PageProps, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Banner from '../components/banner';
import formatDate from '../utils/formatDate';

interface NewsPageProps extends PageProps {
  data: {
    allSanityNews: {
      nodes: {
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
        excerpt: string;
      }[];
    };
  };
}

export const query = graphql`
  query {
    allSanityNews(sort: { publishedAt: DESC }) {
      nodes {
        id
        title
        slug {
          current
        }
        publishedAt
        excerpt
        coverImage {
          asset {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
            altText
          }
        }
      }
    }
  }
`;
const NewsPage: React.FC<NewsPageProps> = ({ data }) => {
  const news = data.allSanityNews.nodes;

  return (
    <Layout>
      <div className="pt-(--navbar-height) min-h-screen ">
        {/* Banner Section */}
        <Banner titleText="最新消息" />
        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {news.map((n) => {
              const image = getImage(n.coverImage?.asset.gatsbyImageData);
              return (
                <Link
                  to={`${n.slug.current}`}
                  key={n.slug.current}
                  className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="h-60 w-full relative">
                    {image && (
                      <GatsbyImage
                        alt={n.coverImage.asset.altText}
                        image={image}
                        className="w-full h-full object-cover"
                        imgStyle={{ objectPosition: 'center' }}
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-2 group-hover:text-(--color-highlight) transition-colors">
                      {n.title}
                    </h3>
                    <p className="text-sm mb-3">{formatDate(n.publishedAt)}</p>
                    <p className="line-clamp-3">{n.excerpt}</p>
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

export default NewsPage;
