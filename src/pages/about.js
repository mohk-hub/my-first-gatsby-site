import React from "react";
import Layout from "../components/layout";

export default function about() {
  return (
    <>
      <Layout pageTitle="About me">
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </Layout>
    </>
  );
}

export const Head = () => <title>About Me</title>;
