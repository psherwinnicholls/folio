import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>This page cannot be found</h1>
    <p>You just hit a page that doesn&rsquo;t exist&hellip;</p>
    <p><Link to="/">Visit the home page</Link>.</p>
  </Layout>
)

export default NotFoundPage
