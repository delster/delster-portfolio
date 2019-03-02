module.exports = {
  siteMetadata: {
    title: `David Elster | Frontend Developer, JAMstack Advocate`,
    description: `Personal portfolio site for David Elster, frontend web developer.`,
    author: `@delster`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `delster-portfolio`,
        short_name: `delster`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-offline',
  ],
}
