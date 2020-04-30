module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Phil Sherwin-Nicholls`,
    description: `Service designer & digital technologist`,
    author: `@phils_n`,
    siteUrl: `https://philsn.co.uk`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-favicon`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-smartypants`],
      },
    },
    `gatsby-plugin-styled-components`,
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-svgr`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
