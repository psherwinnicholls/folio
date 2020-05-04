import React from "react";
import { Link } from "gatsby";
import { Box } from "grommet";
import logoUrl from "../images/logo.svg";

export default () => (
  <header style={{ marginBottom: "4em" }}>
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
            <Link activeClassName="active" to="writing">Writing</Link>
            <Link activeClassName="active" to="contact">Contact me</Link>
        </Box>
      </Box>
    </nav>
  </header>
);
