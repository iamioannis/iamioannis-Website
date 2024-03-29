module.exports = {
  siteMetadata: {
    title: `iamioannis`,
    siteUrl: "https://iamioannis.com",
    description: "Personal Internet corner of Ioannis Mastigopoulos",
    author: `@iamioannis`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `markdown-pages`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `custom-class`,
              maintainCase: true,
              removeAccents: true,
              isIconAfterHeader: true,
          },
        },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 600,
            },
          },  
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
      query: `
          {
          site {
              siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
              }
          }
          }
      `,
      feeds: [
          {
          serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
              })
              })
          },
          query: `
          {
            allMarkdownRemark(
              sort: {order: DESC, fields: [frontmatter___date]}
              filter: {frontmatter: {type: {eq: "post"}, status: {eq: "published"}}}
            ) {
              edges {
                node {
                  id
                  excerpt(pruneLength: 250)
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    date(formatString: "MMM DD, YYYY")
                    title
                    tags
                  }
                }
              }
            }
          }
          `,
          output: "/rss.xml",
          title: "iamioannis.com RSS feed",
          match: "^/blog/",
          },
      ],
      },
  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `iamioannis`,
        short_name: `iamioannis`,
        start_url: `/`,
        background_color: `#F3F1E7`,
        theme_color: `#F3F1E7`,
        display: `minimal-ui`,
        icon: `src/images/yiannisfinalFavicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
