import React from "react"
import { Link } from "gatsby"
import Button from '../components/button'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Newsletter from "../components/newsletter"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Ioannis Mastigopoulos</h1>
    <p>👋 Hi</p>
    <p>Welcome to my personal Intenet corner</p>
    <Link to="/blog/">📝 Writing</Link> <br/>
    <Link to="/isthisapage">Yes this is a page</Link> <br/>
    <Link to="/about">🙋‍♂️ About me</Link> <br/>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
