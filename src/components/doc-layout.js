/** @jsx jsx */
import React from "react"
import { Themed } from "@theme-ui/mdx"
import { Container, jsx, Heading, Link, Text } from "theme-ui"
import { useIntl, IntlProvider } from "gatsby-plugin-intl"
import Layout from "./layout"
import { graphql, useStaticQuery } from "gatsby"
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'theme-ui'
import Prism from '@theme-ui/prism'
import theme from './prism-theme'




const components = {
  h1: Heading.h1,
  h2: Heading.h2,
  h3: Heading.h3,
  h4: Heading.h4,
  h5: Heading.h5,
  h6: Heading.h6,
  p: Text,
  a: Link,
  pre: ({ children }) => <>{children}</>,
  code: Prism,


}

export default ({ subject, children }) => {
  const intl = useIntl()

  const data = useStaticQuery(graphql`
    query MyQuery {
  site {
    siteMetadata {
      siteDescription
      siteTitle
      siteTitleAlt
      siteLanguage
      siteHeadline
      title
    }
  }
}
  `)

  return (
    <ThemeProvider
      theme={theme}
    >
      <Layout title={subject}>
        {/* title part*/}

        <Container sx={{
          bg: "primary",
          p: 4
        }}>
          <Themed.h1 sx={{
            color: "white",
            textAlign: "center",
            fontWeight: 600
          }}>
            {subject}
          </Themed.h1>
          <Themed.p sx={{
            color: "white",
            textAlign: "center"
          }}>
            {data.site.siteMetadata.title}
          </Themed.p>

        </Container>
        <Container as="article" sx={{
          px: [2, 4, 6],
          py: [2, 4, 6],
          pt: [1, 2, 2],
          pb: [1, 2, 2]
        }}>
          {/* <MDXProvider components={components}> */}

          {children}

          {/* </MDXProvider> */}




        </Container>

      </Layout>
    </ThemeProvider>


  )
}

