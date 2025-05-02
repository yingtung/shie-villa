const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Path to the blog post template component
  const roomTemplate = path.resolve('./src/templates/roomDetails.tsx');

  // Query all blog post data from Sanity
  const result = await graphql(`
    query AllRoomsQuery {
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
            _key
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const rooms = result.data.allSanityRoom.nodes;

  // Create a page for each blog post
  rooms.forEach((room) => {
    createPage({
      path: `/rooms/${room.slug.current}`,
      component: roomTemplate,
      context: {
        slug: room.slug.current, // Pass the slug to the template for fetching the specific post
      },
    });
  });
};
