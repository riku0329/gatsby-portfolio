import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import Layout from "../components/layout"
import RichText from "../components/richText"

export const query = graphql`
  {
    prismic {
      allProjects {
        edges {
          node {
            project_title1
          }
        }
      }
    }
  }
`

const ProjectWrapper = styled.section`
  background: #eee;
`

const Project = () => {

  return (
    <Layout>
      <SEO title="project" />
      <ProjectWrapper>

      </ProjectWrapper>
    </Layout>
  )
}

export default Project
