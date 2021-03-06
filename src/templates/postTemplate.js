import React from 'react'
import { graphql } from "gatsby";

import Layout from '../components/layout'

const PostTemplate = ({ data }) => {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    return (
        <Layout>
            <section>
                <div>
                    <h1 className={"post-header"}>{frontmatter.title}</h1>
                    <span className={"post-date"}>{frontmatter.date}</span>
                    {/* <span>{frontmatter.tags}</span> */}
                </div>
                <div dangerouslySetInnerHTML={{__html: html}} />
            </section>
        </Layout>
    );
};

export default PostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`;