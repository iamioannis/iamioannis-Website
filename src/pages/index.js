import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"




const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `400px`, marginBottom: `1.45rem` }}>
      <StaticImage src="../images/yiannisfinalsmallerst.png" 
      alt="iamioannis Homepage"
      layout="fixed"
      height={100}
      imgStyle={{ objectFit: 'contain' }}
      />
      <h1 className="index_title">Ioannis Mastigopoulos</h1>
      <p>👋 Hi</p>
      <p>Welcome to my personal Internet corner</p>
      <Link to="/blog/">📝 Writing</Link> <br/>
      <Link to="/about">🙋‍♂️ About me</Link> <br/>
      <Link to="/ch">👋 Clubhouse notes</Link> <br/>
    </div>
  </Layout>
);

export default IndexPage;


