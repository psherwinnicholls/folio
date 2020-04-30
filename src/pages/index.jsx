import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { Box } from "grommet";

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
      <Nav />

      <section>
        <h1>
          Phil Sherwin-Nicholls&#59;
          <br /> a service designer
          <br />
          &amp; digital technologist.
        </h1>
        <p className="lead">
          Working at the intersection of technology, data and design &mdash;
          Phil has over 5 years experience helping organisations and governments
          to solve wicked, population scale problems.
        </p>
        <p className="lead cta">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:hey@philsn.co.uk"
          >
            Available from May onwards
          </a>
        </p>
      </section>

      <section>
        {data.allMarkdownRemark.edges
          .filter(({ node }) => node.frontmatter.type === "experience")
          .map(({ node }) => (
            <div
              key={node.id}
              className="experience"
              dangerouslySetInnerHTML={{ __html: node.html }}
            />
          ))}
      </section>

      <section>
        <blockquote>
          Phil has this incredible ability to understand our business needs in
          an incredibly short period of time
        </blockquote>
      </section>

      <section>
        {data.allMarkdownRemark.edges
          .filter(({ node }) => node.frontmatter.type === "clients")
          .map(({ node }) => (
            <div
              key={node.id}
              className="clients"
              dangerouslySetInnerHTML={{ __html: node.html }}
            />
          ))}
      </section>

      <section>
        <blockquote>
          We love you, we would literally sacrifice any of our existing team to
          have you on the project
        </blockquote>
        <section />

        <h3>Side projects:</h3>
        <Box direction="row" align="start" wrap>
          {data.allMarkdownRemark.edges
            .filter(({ node }) => node.frontmatter.type === "project")
            .map(({ node }, i) => (
              <Box
                className="project"
                key={node.id}
                pad={{
                  top: "medium",
                  right: "medium"
                }}
                responsive
              >
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={node.frontmatter.link}
                  >
                    {node.frontmatter.title}
                  </a>
                  <br />
                  {node.frontmatter.description}
                </p>
              </Box>
            ))}
        </Box>
      </section>

      <section>
        <h3>Featured in:</h3>
        {data.allMarkdownRemark.edges
          .filter(({ node }) => node.frontmatter.type === "links")
          .map(({ node }) => (
            <div
              key={node.id}
              dangerouslySetInnerHTML={{ __html: node.html }}
            />
          ))}
      </section>

      <section>
        <h3>Contact:</h3>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:hey@philsn.co.uk"
            >
              hey@philsn.co.uk
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/philsn"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/psherwinnicholls/"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={data.allFile.nodes[0].publicURL}
            >
              View CV
            </a>{" "}
            (.pdf)
          </li>
        </ul>
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
            title
            link
            description
          }
        }
      }
    }
    allFile(filter: { extension: { eq: "pdf" } }) {
      nodes {
        publicURL
      }
    }
  }
`;
