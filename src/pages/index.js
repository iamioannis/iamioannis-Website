import React from "react"
import { Link } from "gatsby"
import Button from '../components/button'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Ioannis Mastigopoulos</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/blog/">Writing</Link> <br/>
    <Link to="/isthisapage">Yes this is a page</Link> <br/>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
