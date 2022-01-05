// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import Navigation from '../components/navigation';

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;
  return (
    <Layout>
      <div>
        <h1 className={"post-header"}>{tag}</h1>
      <Navigation></Navigation>
        <h3>{tagHeader}</h3>
        <ul>
          {edges.map(({ node }) => {
            const { title, date } = node.frontmatter;
            const { slug } = node.fields;
            return (
              <li key={slug}>
                <Link to={slug}>
                  {title} ({date})
                </Link>
              </li>
            );
          })}
        </ul>
        <Link to="/tags">All tags</Link>
      </div>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } status: {eq: "published"}} }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;