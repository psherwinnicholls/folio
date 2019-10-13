import React from "react";
import { Helmet } from "react-helmet"
import Layout from "../components/layout";
import SEO from "../components/seo";


export default () => {

  return (

      <Layout>
        <Helmet>
           <title>Rapid Prototying | 2 day intensive | Phil Sherwin-Nicholls</title>
           <link rel="canonical" href="https://philsn.co.uk/coaching" />
         </Helmet>
        <SEO title="Coaching" />
        <section style={{marginTop:'4rem'}}>
          <p>2 day intensive course</p>
          <h1 style={{marginTop:'-1.25rem'}}>Rapid prototyping </h1>
          <p className="lead">
            Learn to empower yourself and others around you by visualising your ideas as fully functioning prototypes hosted on the internet.
          </p>
          <p className="lead cta">
            <a href="mailto:hey@philsn.co.uk">
              Get in touch
             for dates &amp; prices</a>
          </p>
        </section>

        <section>
          <h3>You&rsquo;ll learn how to:</h3>
          <ul>
            <li>code in HTML, CSS &amp; Javascript</li>
            <li>navigate the terminal</li>
            <li>pull, commit and push to Github</li>
            <li>host an app on Heroku</li>
            <li>save time using ninja computer shortcuts</li>
          </ul>
        </section>
      </Layout>
  );
};
