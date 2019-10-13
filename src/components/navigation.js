import React from "react";
import { Link } from "gatsby";
import {Box} from 'grommet';
import logoUrl from  '../images/logo.svg';

export default () => {
  return (
    <header style={{marginBottom: "6em"}}>
      <nav>
        <Box margin={{"top":"medium"}} align="center" justify="between" direction="row">
        <Link className="logo" to="/">
          <img src={logoUrl} alt="Phil's logo" />
        </Link>
        <Box gap="medium" align="center" justify="end" direction="row">
          <Link activeClassName="active" to="/">Home</Link>
          <Link activeClassName="active" to="/coaching">Coaching</Link>
        </Box>
        </Box>
      </nav>
    </header>
  );
};
