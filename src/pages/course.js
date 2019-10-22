import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { Grommet, Markdown, Box, Grid, Heading, Text } from "grommet";

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <section>
      <Link to="coaching">Coaching</Link> >
      <h1 style={{marginTop:"0px"}}>{post.frontmatter.title}</h1>
      <p className="lead">{post.frontmatter.description}</p>
      <p className="lead cta">
        <a href="mailto:hey@philsn.co.uk">Get in touch for dates &amp; prices</a>
      </p>
      </section>
      <section
        dangerouslySetInnerHTML={{
          __html: post.html
        }} />
    </Layout>

  );
};
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        duration
        description
      }
    }
  }
`
