import type { GatsbyConfig } from 'gatsby';
require('dotenv').config({});

const config: GatsbyConfig = {
  siteMetadata: {
    title: '歇Shie Villa民宿 | 雲林虎尾包棟住宿首選',
    siteUrl: 'https://shievilla.com',
    description:
      '歇Shie Villa，提供可容納 28 人的整棟包棟住宿，打造全然專屬的團聚時光。在您忙碌的生活中，歇Shie Villa 是讓您徹底放鬆身心、充電再出發的寧靜空間。盡情享受泳池的清涼、卡拉 OK 的歡唱，以及為親子家庭準備的遊樂空間。在歇Shie Villa 歇息後，再次充滿能量，迎接生活中的美好！',
    image: '/icon.jpg',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: 'production',
        // a token with read permissions is required
        // if you have a private dataset

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
  ],
};

export default config;
