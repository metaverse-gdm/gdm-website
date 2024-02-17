module.exports = {
  siteMetadata: {
    title: `Game Development Meetup in Metaverse`,
    description: `ゲーム開発者集会へようこそ！Not interested in playing games? That`s perfectly fine! This will be a great place for you to speak English, mingle and meet new creative people and business professionals in the Metaverse.`,
    author: `@creatornet`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.spaceId,
    //     accessToken: process.env.accessToken,},
    //   },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-bootstrap-5`,
        short_name: `gb5-starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    
    `gatsby-plugin-gatsby-cloud`,
  ],
}
