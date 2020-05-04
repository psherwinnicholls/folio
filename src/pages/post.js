import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { Box, Text } from "grommet";

import Layout from "../components/layout";
import Subscribe from "../components/subscribe";
import Nav from "../components/navigation";
import SEO from "../components/seo";

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log(post.frontmatter.title)
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
        <Link to="/writing">Writing</Link> ↴
        <h3 style={{"marginTop":"0.1em", "marginBottom":"0.2em"}}>{post.frontmatter.title}</h3>
        <Text>{post.frontmatter.date}</Text>
        <Box
          margin={{ top: "large" }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </section>

      <Subscribe />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;
