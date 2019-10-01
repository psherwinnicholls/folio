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
           <meta charSet="utf-8" />
           <title>Phil Sherwin-Nicholls | Service designer & digital technologist</title>
           <link rel="canonical" href="http://philsn.co.uk" />
         </Helmet>
        <SEO title="Home" />
        <section>

          <h1>Phil Sherwin-Nicholls&#59;<br/> a service designer<br/>&amp; digital technologist.</h1>
          <p className="lead">
             He has worked with the UK Government, healthtechs, fintechs and global technology providers. He speaks about automation, digital transformation, innovation and user centred design.
          </p>
          <p className="lead">
            Blurring the lines between technology, data and design to solve wicked, population scale problems. He has the ability to create pixel perfect designs as well as zooming out to 30,000 feet to get a holistic viewpoint.
          </p>
          <p className="lead cta">
            <a rel="noreopener noreferrer" target="_blank" href="mailto:hey@philsn.co.uk">Available for contracts</a> from mid-October.
          </p>
        </section>

        <section
          style={{
            margin: "3em 0"
          }}
        >
          <h3>Experience</h3>
          <div>
          <ul>
            {data.allMarkdownRemark.edges.filter(edge => !!edge.node.frontmatter.date).map(({ node }) => {
              if(node.frontmatter.type === "experience"){
              return (
                    <li  key={node.id}>
                      {node.frontmatter.client}
                      <br />
                      <span>
                        {node.frontmatter.role}
                      </span>
                      <p>{node.frontmatter.excerpt}</p>
                    </li>
                )
              }
            }
            )}
            </ul>
          </div>
        </section>
        <section style={{margin: "1.5em 0"}}>
          <h3>Talks &amp; workshops</h3>
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => {
              if(node.frontmatter.type === "speaking"){
                return (
                  <div
                    key={node.id}
                    style={flex}
                    dangerouslySetInnerHTML={{ __html: node.html }}>
                  </div>
                )}
            })}
          </div>
        </section>
        <section>
          <h3>Links</h3>
          {data.allMarkdownRemark.edges.map(( {node} ) => {
            if (node.frontmatter.type === "links") {
              return (
              <div
                key={node.id}
                style={flex}
                dangerouslySetInnerHTML={{ __html: node.html }}>
              </div>
            )}
          })}
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
