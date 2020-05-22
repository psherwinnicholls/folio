import React from "react";
import { Helmet } from "react-helmet";
import { Box } from "grommet";

import Layout from "../components/layout";
import Nav from "../components/navigation";
import SEO from "../components/seo";

export default () => {
  return (
    <Layout>
      <Helmet>
        <title>
          Phil Sherwin-Nicholls | Service designer & digital technologist
        </title>
        <link rel="canonical" href="https://philsn.co.uk" />
      </Helmet>
      <SEO title="Phil Sherwin-Nicholls" />
      <Nav style={{ marginBottom: "3em" }} />
      <h1>Get in touch</h1>
      <Box direction="row-responsive" basis="2/3">
        <Box>
          <p>
            Want to hire me? &mdash; or talk shop? Either way I'm happy to hear
            from you
          </p>
          <p>
            Send me an email at{" "}
            <a href="mailto:hey@philsn.co.uk">hey@philsn.co.uk</a>.
          </p>
          <p> or connect with me on:</p>
          <ul>
            <li>
              <a href="https://www.linkedIn.com/philsn">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.twitter.com/phils_n">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/phils_n">Instagram</a>
            </li>
            <li>
              <a href="https://www.github.com/psherwinnicholls">Github</a>
            </li>
          </ul>
        </Box>
      </Box>
    </Layout>
  );
};
