import React from "react"
import styled from "styled-components"
import RichText from "./richText"

const ProjectCardWrapper = styled.div`
  background: white;
  padding: 20px;
  margin: 50px 0;
  border-radius: 3px;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
  .project-card-content {
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    :hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
  .project-image-wrapper {
    padding: 10px;
    margin: auto 10px;
  }
  img {
    max-width: 500px;
    @media (max-width: 768px) {
      max-width: 300px;
    }
  }
`

const ProjectCard = ({ title, description, projectImage }) => {
  return (
    <ProjectCardWrapper>
      <div className="project-card-content">
        <div>
          <RichText render={title} />
          <RichText render={description} />
        </div>
        <div className="project-image-wrapper">
          <img src={projectImage} alt="project-image" />
        </div>
      </div>
    </ProjectCardWrapper>
  )
}

export default ProjectCard
