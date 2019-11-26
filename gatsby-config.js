/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
 module.exports = {
  siteMetadata: {
    title: "BackRoads",
    description:
      "Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure",
    author: "@johndoe",
    twitterUsername: "@john_smilga",
    image: "/defaultBcg.jpeg",
    siteUrl: "https://adventour.netlify.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-playground`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal:true,
      },
    },
  ],
}
