import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Navigation from '../components/navigation'
import Newsletter from '../components/newsletter'
// import Img from 'gatsby-image';
// import { kebabCase } from 'lodash';
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Writing" />
      <h1 className={"post-header"}>Writing</h1>
      <Navigation></Navigation>
      <div className="post-list">
        <p>Welcome to my Writing collateral. <br/>The content included is a collection of all my longform and short form writing that might be spread around mediums. Taking the notion of making this website my personal corner of the internet, I want to make sure I collect most of the content I produce. Some of the categories of content are described below</p>
        <h2>Blog</h2>
        <p>The "Blog" is my reference of writing through time. It can be longform or short form. All writing is collected at the Archive below. When (and if) the content list gets long you can us <Link to="/tags">Tags</Link> to find what topic you are interested easier</p>
        <h2>Newsletter</h2>
        <p>Periodically I'm (about) to forward some of my writing throught my Newsletter. The format can be long or short or collections of items. Topics I want to write about or interesting content from around the web. To receive this periodiacal you can use the subscibe box below to get into my mailing list or read more about it in the <Link to="/newsletter/">Newsletter Page</Link></p>
        <h2>Archive</h2>
        {posts.map(post => (
          <ul key={post.node.id} className="post-list__item">
                <li className="post-list__content">
                <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link><span style={{color:'grey',marginBottom:'inherit'}}> - {post.node.frontmatter.date}</span>
                  {/* Taglist End */}
                  {/* <p>{post.node.frontmatter.date}</p> */}
                  {/* <div className="post-list__excerpt">{post.node.excerpt}</div> */}
                  {/* <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link> */}
                </li>
              </ul>
        ))}
        <br/>
        <Newsletter />
      </div>

    </Layout>
  );
};

export default BlogPage;

// Get all markdown data, in descending order by date, and grab the id, excerpt, slug, date, and title
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
      filter: {frontmatter: {type: {eq: "post"}, status: {eq: "published"}}}
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            tags
            type
            thumbnail {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;