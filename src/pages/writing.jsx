import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { Box, Text } from "grommet";

import Layout from "../components/layout";
import Nav from "../components/navigation";
import SEO from "../components/seo";

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>
          Phil Sherwin-Nicholls | Service designer & digital technologist
        </title>
        <link rel="canonical" href="https://philsn.co.uk" />
      </Helmet>
      <SEO title="Phil Sherwin-Nicholls" />
      <Nav style={{"marginBottom":"3em"}}/>
      <h1>Blog</h1>
      <Box direction="row-responsive" gap="medium">
        <Box basis="2/3" as="section" style={{"marginTop":"0"}}>
          {data.allMarkdownRemark.edges
            .map(({ node }, i) => (
              <Box key={i} margin={{"bottom":"large"}} as="article">
                <Box as="header">
                  <h3 style={{"marginBottom":"0.45em" }}>
                  <Link style={{"color":"blue", "fontSize": "1em"}} to={node.fields.slug}>
                    {node.frontmatter.title}
                  </Link>
                  </h3>
                  <Text color="dark-5" as="small">{node.frontmatter.date}</Text>
                </Box>

                <Box margin={{"top":"medium"}}>
                  <p>{node.excerpt}</p>
                  <p><Link to={node.fields.slug}>Read more</Link></p>
                </Box>


              </Box>
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {type: {eq: "writing"}}}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}

`
