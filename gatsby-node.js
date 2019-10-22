/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)
//
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `data` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }
//
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(`
//     {
//       allMarkdownRemark(filter: {frontmatter: {type: {eq: "course"}}}) {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       console.log(node)
//       createPage({
//         path: node.fields.slug,
//         component: path.resolve(`./src/pages/course.js`),
//         context: {
//           // Data passed to context is available
//           // in page queries as GraphQL variables.
//           slug: node.fields.slug,
//         },
//       })
//     })
//   })
// }
