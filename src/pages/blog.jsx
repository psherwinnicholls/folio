import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { Box } from "grommet";

import Layout from "../components/layout";
import Subscribe from "../components/subscribe";
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
      <Nav />

      <section>
        {data.allMarkdownRemark.edges
          .filter(({ node }) => node.frontmatter.type === "writing")
          .map(({ node }) => (
            <div
              key={node.id}
              dangerouslySetInnerHTML={{ __html: node.html }}
            />
          ))}
      </section>
      <Subscribe/>

    </Layout>
  );
};
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            type
            title
            link
            description
          }
        }
      }
    }
  }
`;
