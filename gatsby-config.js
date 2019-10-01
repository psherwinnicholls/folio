module.exports = {
  pathPrefix: "/folio",
  siteMetadata: {
    title: `Phil Sherwin-Nicholls`,
    description: `Currently contracting for the Department for Education. Previously at Decoded &amp; Joylab`,
    author: `@phils_n`,
    siteUrl: `https://philsn.co.uk`
  },
  plugins: [{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-transformer-remark`,
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
