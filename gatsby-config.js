module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    'gatsby-plugin-postcss',
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/mdx/highlighted-projects/`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lam Yik Hei - Web Developer`,
        start_url: `/`,
        icon: `src/images/favicon.png`,
      },
    },
  ]
};
