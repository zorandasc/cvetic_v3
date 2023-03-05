/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// You can delete this file if you're not using it

import React from "react";
import { AppProvider } from "./src/context";

import "@fontsource/poppins"; //default to 400
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/great-vibes";

import "./src/css/layout.css";

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "sr-Latn-CS" });
};
