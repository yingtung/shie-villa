const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Path to the template components
  const roomTemplate = path.resolve('./src/templates/roomDetails.tsx');
  const newsTemplate = path.resolve('./src/templates/newsDetails.tsx');

  // Query all blog post data from Sanity
  const result = await graphql(`
    query AllQuery {
      allSanityRoom(sort: { slug: { current: ASC } }) {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityNews(sort: { publishedAt: DESC }) {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const rooms = result.data.allSanityRoom.nodes;
  const news = result.data.allSanityNews.nodes;

  // Create a page for each room
  rooms.forEach((room) => {
    createPage({
      path: `/rooms/${room.slug.current}`,
      component: roomTemplate,
      context: {
        slug: room.slug.current, // Pass the slug to the template for fetching the specific post
      },
    });
  });
  news.forEach((n) => {
    createPage({
      path: `/news/${n.slug.current}`,
      component: newsTemplate,
      context: {
        id: n.id,
        slug: n.slug.current,
      },
    });
  });
};
