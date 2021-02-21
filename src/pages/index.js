import React from "react"
import { Link } from "gatsby"
import Button from '../components/button'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Button buttonText="Click me" />
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/blog/">Writing</Link> <br />
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
