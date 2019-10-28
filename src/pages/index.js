import React from "react";
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default ({ data }) => {

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
            <a href="mailto:hey@philsn.co.uk">Available now</a>
          </p>
        </section>

        <section>
          {data.allMarkdownRemark.edges
          .filter(({node}) => node.frontmatter.type === 'clients')
          .map(( {node} ) => (
            <div
              key={node.id}
              className="experience"
              dangerouslySetInnerHTML={{ __html: node.html }}>
            </div>
          ))}
        </section>

        <section>
          <h3>Featured in</h3>
          {data.allMarkdownRemark.edges
            .filter(({node}) => node.frontmatter.type === 'links')
            .map(( {node} ) => (
              <div
                key={node.id}
                dangerouslySetInnerHTML={{ __html: node.html }}>
              </div>
            ))}
        </section>
        <section style={{marginTop: "8rem"}}>
          <h3>Contact</h3>
          <p><Link to="mailto:hey@philsn.co.uk">hey@philsn.co.uk</Link></p>
          <p>86-90 Paul St,<br/>London</p>
          <p>@phils_n</p>
          <Link></Link>
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
            type
          }
        }
      }
    }
  }
`;
