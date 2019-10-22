import React from "react";
import { Helmet } from "react-helmet"
import {Link, graphql } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";


export default ({ data }) => {
  return (

      <Layout>
        <Helmet>
           <title>Rapid Prototying | 2 day intensive | Phil Sherwin-Nicholls</title>
           <link rel="canonical" href="https://philsn.co.uk/coaching" />
         </Helmet>
        <SEO title="Coaching" />
        <section style={{marginTop:'4rem'}}>
          <h1 style={{marginTop:'-1.25rem'}}>Learn &amp; do</h1>
          <p className="lead">
            Whether you&rsquo;re launching, iterating or researching &mdash; we&rsquo;ll do it together. That way, you get the skills and confidence in the areas that matter.
          </p>
          <p className="lead cta">
            <a href="mailto:hey@philsn.co.uk">Get in touch</a>
          </p>
        </section>
        <section>
          {data.allMarkdownRemark.edges
            .filter(({node}) => node.frontmatter.type === 'course')
            .map(({ node }) => (
              <div key={ node.frontmatter.id }>
                  <Link to={node.fields.slug}>
                    { node.frontmatter.title }
                  </Link>
                <p> { node.frontmatter.description } </p>
              </div>
            ))}
        </section>


      </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            type
            title
            description
          }
        }
      }
    }
  }
`;
