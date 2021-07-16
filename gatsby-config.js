/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-mongodb",
      options: {
        // Name of the database and collection
        dbName: "portfolio",
        collection: [`jobs`, `projects`],
        server: {
          address: "suei2.mongodb.net",
        },
        auth: {
          user: "warcreed",
          password: "a0YSK84KE21Vlt4q",
        },
        extraParams: {
          retryWrites: true,
        },
      },
    },
  ],
}
