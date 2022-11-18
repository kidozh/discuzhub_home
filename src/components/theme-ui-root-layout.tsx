/** @jsx jsx */
// @ts-ignore
import { ThemeProvider } from "theme-ui"
import { css, jsx } from "theme-ui"
import React from "react"
import { Global } from "@emotion/react"
import SEO from "./seo"

import theme from "../utils/theme"

type LayoutProps = { children?: React.ReactNode; className?: string }

const Layout = ({ children, className }: LayoutProps) => (
  <ThemeProvider theme={theme}>
    
    <Global
      styles={css({
        "*": {
          boxSizing: `inherit`,
          "&:before": {
            boxSizing: `inherit`,
          },
          "&:after": {
            boxSizing: `inherit`,
          },
        },
        // html: {
        //   fontSize: `18px`,
        // },
        body: {
          margin: 0,
          padding: 0,
          boxSizing: `border-box`,
          textRendering: `optimizeLegibility`,
          WebkitFontSmoothing: `antialiased`,
          MozOsxFontSmoothing: `grayscale`,
        },
        "::selection": {
          backgroundColor: `primary`,
          color: `white`,
        },
      })}
    />
    <SEO />
    <main className={className}>{children}</main>
  </ThemeProvider>
)

export default Layout
