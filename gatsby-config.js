module.exports = {
  siteMetadata: {
    title: `David Elster`,
    description: `David Elster, Frontend Developer & JAMstack Advocate`,
    author: `https://github.com/delster`,
  },
  plugins: [
    // SEO
    `gatsby-plugin-react-helmet`,
    // File System as a GraphQL Source
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    // Blogging / Markdownsd
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    // Images
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Styling
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true,
      },
    },
    `gatsby-plugin-styled-components`,
    // PWA Manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `delster-portfolio`,
        short_name: `delster`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //        icon: `src/images/gatsby-icon.png`,
      },
    },
    // PWA Offline Access
    "gatsby-plugin-offline",
  ],
}
