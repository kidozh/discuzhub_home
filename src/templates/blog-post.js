/** @jsx jsx */
import {Styled, jsx, Divider, Flex, Container, Box, NavLink,useColorMode, Grid, Heading, Avatar, Text, Badge} from 'theme-ui'
import React from "react"
import { Link as GatsbyLink, graphql } from "gatsby"
import {Link, useIntl } from "gatsby-plugin-intl"
import BlogCover from "../components/blog-cover"
import Logo from "../../static/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faClock } from '@fortawesome/free-solid-svg-icons'



import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = pageContext
  const intl = useIntl()
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>

        </header>
        <section
          sx={{
            pl:[4,5,7],
            pr:[4,5,7],
          }}
        >
          <Grid columns={[1]}>
            <Box>
              <Styled.h1 itemProp="headline" sx={{
                alignItems:'center',
                fontWeight:400
              }}>{post.frontmatter.title}</Styled.h1>
              <Heading as="h4" sx={{
                color:"gray",
                fontWeight:400
              }}>
                <Badge p={1} mr={2}>{post.frontmatter.keywords}</Badge>
                {post.frontmatter.excerpt}
              </Heading>
            </Box>
            <Box sx={{
              mt:2
            }}>
              <BlogCover sx={{
                pt:[0,2,4],

              }} coverName={post.frontmatter.cover} alt={post.frontmatter.cover} roundRadius={true} />
            </Box>

          </Grid>
          <Grid columns={[1,'1fr 2fr','1fr 2fr']}
            gap={2}
          >
            <Box sx={{
              pt:[4,4,4],
              mt:[4,4,4]
            }}>

              <Avatar src={Logo} alt="logo"/>
              <Heading as="h4" sx={{
                color:"primary",
                fontWeight:400
              }} >
                Discuz Hub
              </Heading>
              <Heading as="p" sx={{
                color:"gray",
                fontWeight: 400
              }}>
                <FontAwesomeIcon icon={faClock} />
                {intl.formatMessage({id:"blog.publishTime"},{time:post.frontmatter.date})}
              </Heading>
              <Text as="p" variant="mute">
                <FontAwesomeIcon icon={faCoffee} />
                {intl.formatMessage({id:"blog.timeToReadUnit"},{min:post.timeToRead})  }
              </Text>
              {/* Table of Content */}
              {/*<Container dangerouslySetInnerHTML={{ __html: post.tableOfContents }}*/}
              {/*           itemProp="articleBody">*/}

              {/*</Container>*/}
              <Container>
                {post.frontmatter.tags.forEach(
                  v => (
                    <a>{v}</a>
                  )
                )}

              </Container>

            </Box>

            <Box dangerouslySetInnerHTML={{ __html: post.html }}
                 itemProp="articleBody">
            </Box>

          </Grid>
          <Divider sx={{
            bg:"text",
            color:"mute",
            borderColor:"mute",
            borderStyle:"dashed"

          }} />
          <Grid sx={{
            pt:[1,2,2],
            pb:[1,2,2]
          }} columns={[1,2]}>
            <Box>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </Box>
            <Box sx={{
              textAlign:"right"
            }}>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </Box>

          </Grid>
        </section>

        <footer>

        </footer>
      </article>

    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        cover
        excerpt
        keywords
        tags
      }
      html
      tableOfContents
      timeToRead
    }
  }
`