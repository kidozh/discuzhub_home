/** @jsx jsx */
import { graphql } from "gatsby"
import Layout from "../components/layout"
import {Themed} from "@theme-ui/mdx"
import { Box, Card, Container, Grid, Image, jsx, Heading } from "theme-ui"
import { Link as IntlLink, useIntl } from "gatsby-plugin-intl"
import BlogCover from "../components/blog-cover"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const Blog = ({ data }) => {
  const intl = useIntl()
  console.log(data)

  return (
    <Layout subject={intl.formatMessage({ id: "blog.blog" })}>
      {/* title part*/}
      <Container sx={{
        bg: "gray",
        p: 4
      }}>
        <Themed.h1 sx={{
          color: "white",
          textAlign: "center",
          fontWeight: 600
        }}>
          {intl.formatMessage({ id: "blog.blog" })}
        </Themed.h1>
        <Themed.p sx={{
          color: "white",
          textAlign: "center"
        }}>
          {intl.formatMessage({ id: "blog.blog_annotation" })}
        </Themed.p>
        <Themed.p sx={{
          mt: 1,
          color: "white",
          textAlign: "center"
        }}>
          {intl.formatMessage({id:"blog.allPostCounts"},{posts:data.allMarkdownRemark.totalCount})  }
        </Themed.p>
      </Container>
      <Container px={[1, 2, 4]} py={[1, 2, 4]}>
        <Grid gap={1}
              columns={[1, 1, 1]}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Box>
              <Card
                key={node.id}
                sx={{
                  mb:2,
                  // pl: [1, 2, 4],
                  // pr: [1, 2, 4]
                }}>
                <Grid columns={[1,"1fr 3fr"]}>
                  <Box><BlogCover coverName={node.frontmatter.cover} /></Box>
                  <Box>
                    <Heading as="h4" sx={{
                      fontWeight: "500"
                    }}>
                      <FontAwesomeIcon icon={faClock} /> {node.frontmatter.date}
                      / {node.frontmatter.keywords}
                    </Heading>
                    <Heading as="h1" sx={{
                      mt:[2,null,3],
                      mb:[1,2,2],
                      fontWeight: 600
                    }}>
                      <IntlLink
                        href={node.fields.slug}
                        to={node.fields.slug}
                        sx={{
                          color: "inherit",
                          textDecoration: "none",
                          ":hover,:focus": {
                            color: "primary",
                            transition: ".5s all ease"
                          }
                        }}>
                        {node.frontmatter.title}
                      </IntlLink>
                    </Heading>
                    <Themed.p sx={{
                      color:"gray"
                    }}>{node.excerpt}</Themed.p>
                  </Box>
                </Grid>
              </Card>
            </Box>
          ))}
        </Grid>

      </Container>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            cover
            tags
            excerpt
            keywords
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Blog;