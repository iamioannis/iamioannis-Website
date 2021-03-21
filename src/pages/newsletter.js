import React from "react"
import Layout from "../components/layout";
import { graphql, Link, navigate } from 'gatsby';
import Newsletter from "../components/newsletter"

const NewsletterPage = ({ data }) => {
    const postss = data.allMarkdownRemark.edges;
    return (
        <Layout>
            <h1 className={"post-header"}>Newsletter</h1>
            <div style={{
                // padding:"100px",
                // borderRight:"10px",
                // // backgroundColor:'#f124',
                // marginLeft:"10px",
                // alignContent:'center',
            }}>
            <p>I'm (planning) to start sharing long form and shorter collateral issues of with content from this website and things I find interesting from around the web in a newsletter. If you would like to receive these updates in your email inbox, feel free to use the form below to Subscribe. All posts that have been sent throught the newsletter can be found below</p>
            <h2>Privacy</h2>
            <p>Privacy means alot to me and the last thing I want to do is to use your data for profit. Today I am using Substack to deliver my newsletter issues. My intentions thought are not to be creapy with the data provided. So, as far as the options I have control of I will not be using any advanced tracking that Substack provides (Google Analytics, Facebook Pixel etc) for anyone subscribing to my newsletter.</p>
            <h2>Newsletter Archive</h2>
            {postss.map(post => (
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
            <Newsletter/>
            </div>
        </Layout>
    );
};

export default NewsletterPage;

export const letterPageQuery = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {type: {eq: "post"}, tags: {eq: "newsletter"}}}) {
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