module.exports = {
  siteMetadata: {
    title: `David Elster`,
    description: `David Elster, Frontend Developer & JAMstack Advocate`,
    author: `https://github.com/delster`,
  },
  plugins: [
    // SEO with React Helmet
    `gatsby-plugin-react-helmet`,
    // GraphQL Source for Images
    // Uncomment when at least 1 image is in /images. If empty, it'll error in CI/CD.
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images/`,
    //   },
    // },
    // GraphQL Source for Posts
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    // React SPA CMS
    `gatsby-plugin-netlify-cms`,
    // Markdown Parser
    `gatsby-transformer-remark`,
    // Sharp Library for Images
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Sass Compilation
    `gatsby-plugin-sass`,
    // Typography.js
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true,
      },
    },
    // Styled Components
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
 //     icon: `src/images/gatsby-icon.png`,
      },
    },
    // PWA Offline Access
    `gatsby-plugin-offline`,
    // Enable HTTP/2 Server Push through Netlify
    `gatsby-plugin-netlify`,
  ],
}
