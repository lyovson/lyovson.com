import React from "react";
import Layout from "./src/components/Layout";

export const wrapRootElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
