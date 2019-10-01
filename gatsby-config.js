module.exports = {
  siteMetadata: {
    title: `Phil Sherwin-Nicholls`,
    description: `Currently contracting for the Department for Education. Previously at Decoded &amp; Joylab`,
    author: `@phils_n`,
  },
  plugins: [
    {
         resolve: `gatsby-source-filesystem`,
         options: {
           name: `src`,
           path: `${__dirname}/src/`,
         },
       },
       `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
