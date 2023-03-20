import React from "react";

import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <main>
      <h1>
        This page not found!!! Please back to <Link to="/">home</Link> page.
      </h1>
    </main>
  );
}
