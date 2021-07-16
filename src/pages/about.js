import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"

const About = () => {
  return (
    <>
      <h2>about page</h2>
    </>
  )
}

export const query = graphql`
  {
    strapiAbout {
      title
      info
      stack {
        id
        skill
      }
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`

export default About
