import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Newsletter from '../components/newsletter'
// import Img from 'gatsby-image';
// import { kebabCase } from 'lodash';
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Writing" />
      <h1>Writing</h1>
      <div className="post-list">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt bibendum eros ut convallis. Sed dapibus eros eget justo fringilla ultricies. Nulla quis ante vel purus dapibus dignissim. Aenean cursus condimentum fringilla. Fusce tristique libero diam, hendrerit egestas nunc malesuada eget.</p>
        <h2>Blog</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt bibendum eros ut convallis. Sed dapibus eros eget justo fringilla ultricies. Nulla quis ante vel purus dapibus dignissim. Aenean cursus condimentum fringilla. Fusce tristique libero diam, hendrerit egestas nunc malesuada eget.</p>
        <h2>Archive</h2>
        {posts.map(post => (
          <ul key={post.node.id} className="post-list__item">
                <li className="post-list__content">
                <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link><span style={{color:'grey'}}> - {post.node.frontmatter.date}</span>
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
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {type: {eq: "post"}}}) {
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