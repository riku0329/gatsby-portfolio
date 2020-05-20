import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import Layout from "../components/layout"
import RichText from "../components/richText"
import ProjectCard from "../components/projectCard"
import { SectionTitle } from "../components/sectionTitleStyled"

export const query = graphql`
  {
    prismic {
      allProjects {
        edges {
          node {
            project_title
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
  max-width: 800px;
  margin: 0 auto;
  margin-top: 100px;
  h2 {
    font-size: 3rem;
  }
  .tc{
    text-align: center;
  }
  .project_path:after {
    content: "プロジェクト";
  }
  .project_path {
    a {
      font-weight: bold;
      color: #03dac5;
    }
    span {
      margin: 0 10px 0 10px;
    }
  }
`

const Project = props => {
  return (
    <Layout>
      <SEO title="project" />
      <ProjectWrapper>
        <div>
          <p className="project_path">
            <Link to="/">ホーム</Link>
            <span>></span>
          </p>
        </div>
        <div className="tc">
        <SectionTitle>
          <RichText
            render={props.data.prismic.allProjects.edges[0].node.project_title}
          />
        </SectionTitle>
        </div>
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
