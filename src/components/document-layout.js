/** @jsx jsx */
import React from "react"
import { Container, jsx, Heading, Link, Text } from "theme-ui"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "./layout"
import { graphql, useStaticQuery } from "gatsby"
import { MDXProvider } from "@theme-ui/mdx"





const components = {
  h1:Heading.h1,
  h2:Heading.h2,
  h3:Heading.h3,
  h4:Heading.h4,
  h5:Heading.h5,
  h6:Heading.h6,
  p: Text,
  a: Link


}

export default ({ subject, children }) => {
  const intl = useIntl()

  const data = useStaticQuery(graphql`
    query DocumentLayoutQuery {
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
    <Layout title={subject}>
      {/* title part*/}
      <Container sx={{
        bg: "primary",
        p: 4
      }}>
        <Heading as="h1" sx={{
          color: "white",
          textAlign: "center",
          fontWeight: 600
        }}>
          {subject}
        </Heading>
        <Text sx={{
          color: "white",
          textAlign: "center"
        }}>
          {data.site.siteMetadata.title}
        </Text>

      </Container>
      <Container as="article" sx={{
        px:[2,4,6],
        py:[2,4,6],
        pt:[1,2,2],
        pb:[1,2,2]
      }}>
        <MDXProvider components={{
          a: Link
        }}>
          {children}
        </MDXProvider>
        



      </Container>
    </Layout>
  )
}

