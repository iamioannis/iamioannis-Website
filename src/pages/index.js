import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `400px`, marginBottom: `1.45rem` }}>
    <h1 className="index_title">Ioannis Mastigopoulos</h1>
    <p>👋 Hi</p>
    <p>I'm Ioannis</p>
    <p>Welcome to my personal Internet corner.  </p>
    <Link to="/about">🙋‍♂️ About me</Link> <br/>
    <Link to="/blog/">📝 Writing</Link> <br/>
    <Link to="/shelve">📚 Shelve</Link> <br/>
    </div>
  </Layout>
)

export default IndexPage
