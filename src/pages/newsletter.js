import React from "react"
import Layout from "../components/layout";
import { graphql, Link, navigate } from 'gatsby';
import Newsletter from "../components/newsletter"
import Navigation from "../components/navigation";

const NewsletterPage = ({ data }) => {
    const postss = data.allMarkdownRemark.edges;
    return (
        <Layout>
            <h1 className={"post-header"}>Newsletter</h1>
            <Navigation/>
            <div>
            <p>I'm (planning) to start sharing long form, shorter ot collateral issues of content from this website and things I find interesting from around the web in a newsletter. If you would like to receive these updates in your email inbox, feel free to use the form below to Subscribe. All posts that have been sent throught the newsletter can be found below</p>
            <h2>Privacy</h2>
            <p>Privacy means alot to me and the last thing I want to do is to use your data for profit. Today I am using Substack to deliver my newsletter issues. My intentions thought are not to be creapy with the data provided. So, as far as the options I have control of I will not be using any advanced tracking that Substack provides (Google Analytics, Facebook Pixel etc) for anyone subscribing to my newsletter.</p>
            <h2>Newsletter Archive</h2>
            {postss.map(post => (
                <ul key={post.node.id} className="post-list__item">
                        <li className="post-list__content">
                        <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link><span style={{color:'grey'}}> - {post.node.frontmatter.date}</span>
                        </li>
                    </ul>
                ))}
            <Newsletter/>
            </div>
        </Layout>
    );
};

export default NewsletterPage;

export const letterPageQuery = graphql`
  query {
    allMarkdownRemark(
        sort: {frontmatter: {date: DESC}}, 
        filter: {frontmatter: {type: {eq: "post"}, tags: {eq: "newsletter"}}}) {
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