import React from "react";
import { Helmet } from "react-helmet"
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default ({ data }) => {

  const flex = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap"
  }

  return (
      <Layout>
        <Helmet>
           <title>Phil Sherwin-Nicholls | Service designer & digital technologist</title>
           <link rel="canonical" href="https://philsn.co.uk" />
         </Helmet>
        <SEO title="Home" />
        <section>
          <h1>Phil Sherwin-Nicholls&#59;<br/> a service designer<br/>&amp; digital technologist.</h1>
          <p className="lead">
            Working at the intersection of technology, data and design. Phil works with organisations to  solve wicked, population scale problems.
          </p>
          <p className="lead cta">
            <a href="mailto:hey@philsn.co.uk">Available for contracts</a> from mid-October.
          </p>
        </section>

        <section>
          <h3>Experience</h3>
            <ul>
              {data.allMarkdownRemark.edges
              .filter(({node}) => node.frontmatter.type === 'experience')
              .map(( {node} ) => (
                <li key={node.id}>
                  {node.frontmatter.client}
                  <br />
                  <span>
                    {node.frontmatter.role}
                  </span>
                  <p>{node.frontmatter.excerpt}</p>
                </li>
              ))}
            </ul>
        </section>
        <section>
          <h3>Talks &amp; workshops</h3>
          <div>
          {data.allMarkdownRemark.edges
            .filter(({node}) => node.frontmatter.type === 'speaking')
            .map(( {node} ) => (
              <div
                key={node.id}
                style={flex}
                dangerouslySetInnerHTML={{ __html: node.html }}>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h3>Links</h3>
          {data.allMarkdownRemark.edges
            .filter(({node}) => node.frontmatter.type === 'links')
            .map(( {node} ) => (
              <div
                key={node.id}
                dangerouslySetInnerHTML={{ __html: node.html }}>
              </div>
            ))}
        </section>
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
            client
            role
            date
            type
          }
          excerpt
        }
      }
    }
  }
`;
