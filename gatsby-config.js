/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Svadbeni Cvet`,
    description: `Započnite svoje svadbeno putovanje sa našim svadbenim cvetićima, bidermajerima, ukrasnim kutijama za koverte i burme, ofingerima i drugim svadbenim ukrasima i dekoracijama.`,
    author: `@zorandsc`,
    image: `/marriage.jpg`,
    siteUrl: `https://svadbenicvet.com`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },

    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://svadbenicvet.com",
        sitemap: "https://svadbenicvet.com/sitemap.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/Layout.js`),
        injectPageProps: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Svadbeni Cvet`,
        short_name: `Svadbeni Cvet`,
        start_url: `/`,
        background_color: `#262626`,
        theme_color: `#262626`,
        display: `minimal-ui`,
        icon: `src/images/heart.png`, // This path is relative to the root of the site.
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    //when removing gatsby-plugin-offline uncoment this
    `gatsby-plugin-remove-serviceworker`,
    //`gatsby-plugin-offline`,
  ],
};
