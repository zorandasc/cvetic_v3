/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { AppProvider } from "./src/context"

import "./src/css/layout.css";

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>
}


export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "sr-Latn-CS" });
};