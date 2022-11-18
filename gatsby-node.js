const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions

  // blog post template
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown posts sorted by date
  const result = await graphql(
    `
        {
          allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 1000) {
              nodes {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        `
  )

  // error feedback
  if (result.errors) {
    reporter.panicOnBuild(
      `Error found in blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // create blog post pages
  // need at least one markdown

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1]
      const next = index === 0 ? null : posts[index - 1]

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          slug: post.fields.slug,
          previous,
          next,
        }
      })
    });
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  //console.log(node.internal.type)
  if (node.internal.type === `MarkdownRemark`) {
    // console.log(node)
    const value = "/dev-blog" + createFilePath({ node, getNode })
    //console.log(value)
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
  else if (node.internal.type == "Mdx") {
    var filePath = createFilePath({ node, getNode, basePath:"docs" })
    const docValue = "/docs" + path
    createNodeField({
      name: `slug`,
      node,
      docValue
    })
    console.log(filePath, filePath.split("."))
    filePath = filePath.replace("/","")
    // judge the language
    if (filePath.split(".").length == 2) {
      
      const langKey = filePath.split(".")[1]
      console.log("languages "+langKey)
      var langSlug = docValue.replace(".","")
      langSlug = langSlug.replace(langKey,"")
      createNodeField({
        name: `langSlug`,
        node,
        value: langSlug
      })

      createNodeField({
        name: `lang`,
        node,
        value: langKey
      })
    }
    else {
      const langKey = "any"
      createNodeField({
        name: `langSlug`,
        node,
        value: docValue
      })
      createNodeField({
        name: `lang`,
        node,
        value: langKey
      })
    }

  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
      type SiteSiteMetadata {
        author: Author
        siteUrl: String
        social: Social
      }
      type Author {
        name: String
        summary: String
      }
      type Social {
        twitter: String
      }
      type MarkdownRemark implements Node {
        frontmatter: Frontmatter
        fields: Fields
      }
      type Frontmatter {
        title: String
        description: String
        date: Date @dateformat
      }
      type Fields {
        slug: String
      }
    `)
}