/**
 * Chad Parker Portfolio
 *
 * See: https://imchad.me
 */

module.exports = {
  /* SEO */
  siteMetadata: {
    title: `Chad Parker Portfolio`,
    description: `Chad Parker Portfolio built with Gatsby and Strapi`,
    titleTemplate: `%s | Chad Parker`,
    url: `https://imchad.me`,
    twitterUsername: `@imchad_me`,
    image: `/chad.jpg`,
  },
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
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://calm-refuge-62365.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        collectionTypes: [`job`, `project`],
        singleTypes: [`about`],
      },
    },
  ],
}
