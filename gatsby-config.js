module.exports = {
  siteMetadata: {
    siteTitle: `rfebrians.github.io`,
    siteTitleAlt: `RFebrians - Portfolio`,
    siteHeadline: `RFebrians - Portfolio`,
    siteUrl: `https://rfebrians.github.io`,
    siteDescription: `A Portfolio with a single page `,
    siteLanguage: `en`,
    siteImage: `./static/portfolio.jpg`,
    author: `@r`
  },
  plugins: [
    {
      resolve: '@lekoarts/gatsby-theme-cara',
      // See the theme's README for all available options
      options: {}
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'assets',
        path: `${__dirname}/src/@lekoarts/gatsby-theme-cara/assets/`
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'RFebrians - Portfolio',
        short_name: 'rfebrians.github.io',
        description: 'A portfolio website written in Gatsby',
        start_url: '/',
        background_color: '#27272a',
        theme_color: '#f7caca',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    'gatsby-plugin-gatsby-cloud'
  ].filter(Boolean)
}
