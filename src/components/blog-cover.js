import React from "react"
import { graphql, useStaticQuery, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export function renderImage(imageNode, roundRadius) {
  const node = imageNode.node
  return (
    <Img sx={{
      borderRadius: roundRadius? "16px": 0
    }} fluid={node.childImageSharp.fluid} alt={node.relativePath} />
  )
}

export default function BlogCover({coverName, roundRadius}) {
  return (
    <StaticQuery query={graphql`
      query BlogCoverQuery {
        allFile(filter: {sourceInstanceName: {eq: "assets"}}) {
          edges{
            node {
              childImageSharp {
                fluid{
                  aspectRatio
                  base64
                  originalImg
                  originalName
                  presentationHeight
                  presentationWidth
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                  tracedSVG
                }
              }
              relativePath
            }
          }
          
        }
      }`} render={(data => {
        console.log("COVER "+coverName)

        const image = data.allFile.edges.find(
        image => image.node.relativePath === coverName
        )
      const isRound = roundRadius === true
        return (renderImage(image,isRound))
    })}/>
  )

}
