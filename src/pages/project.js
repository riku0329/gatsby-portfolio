import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { SectionTitle } from "../components/sectionTitleStyled"
import ProjectCard from "../components/projectCard"

export const query = graphql`
  {
    prismic {
      allProjects {
        edges {
          node {
            project_title1
            project {
              project_description
              project_image
              project_name
            }
          }
        }
      }
    }
  }
`

const ProjectWrapper = styled.section`
  background: #eee;
  padding-top: 100px;
  max-width: 800px;
  margin: 0 auto;
`

const Project = props => {
  console.log(props)
  return (
    <Layout>
      <SEO title="project" />
      <ProjectWrapper>
        <SectionTitle>
          {props.data.prismic.allProjects.edges[0].node.project_title1}
        </SectionTitle>

        {props.data.prismic.allProjects.edges[0].node.project.map(
          (project, i) => {
            return (
              <ProjectCard
                key={i}
                description={project.project_description}
                title={project.project_name}
                projectImage={project.project_image.url}
              />
            )
          }
        )}
      </ProjectWrapper>
    </Layout>
  )
}

export default Project
