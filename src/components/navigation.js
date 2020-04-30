import React from "react";
import { Link } from "gatsby";
import { Box } from "grommet";
import logoUrl from "../images/logo.svg";

export default () => (
  <header style={{ marginBottom: "6em" }}>
    <nav>
      <Box
        margin={{ top: "medium" }}
        align="center"
        justify="between"
        direction="row"
      >
        <Link className="logo" to="/">
          <img src={logoUrl} alt="Phil's logo" />
        </Link>
        <Box
          align="center"
          justify="between"
          gap="medium"
          direction="row">
            <Link to="blog">Writing</Link><Link to="blog">Contact</Link>
        </Box>
      </Box>
    </nav>
  </header>
);
