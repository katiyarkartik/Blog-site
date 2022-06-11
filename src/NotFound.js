import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h2>Sorry Page not found</h2>
      <p>Error 404 :(</p>
      <Link to="/">Back to home page</Link>
    </div>
  );
};

export default NotFound;
