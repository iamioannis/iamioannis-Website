// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files

import React from 'react';
import { Link, graphql } from 'gatsby';
import Navigation from '../components/navigation';

import { kebabCase } from 'lodash';

import Layout from '../components/layout';
const TagsPage = ({ data }) => {
  const allTags = data.allMarkdownRemark.group;

  return (
    <Layout>
      <div>
        <h1 className={"post-header"}>Tags</h1>
        <Navigation/>
        <ul>
          {allTags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: {status: {eq: "published"}}}
      )
      {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;