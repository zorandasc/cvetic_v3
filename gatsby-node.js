/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async function({ graphql, actions }) {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      works: allContentfulWork {
        edges {
          node {
            slug
          }
        }
      }
      blogs: allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.works.edges.forEach(({ node }) => {
    createPage({
      path: `gallery/${node.slug}`,
      component: path.resolve("./src/templates/workTemplate.js"),
      context: { slug: node.slug },
    })
  })
  data.blogs.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/templates/blogTemplate.js"),
      context: { slug: node.slug },
    })
  })
}
