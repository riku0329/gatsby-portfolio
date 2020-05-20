import React from "react"
import styled from "styled-components"
import RichText from "./richText"

const ProjectCardWrapper = styled.div`
  background: #fff;
  padding: 20px;
  margin: 50px 0;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  :hover{
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px){
    width: 90%;
    margin: 50px auto;
  }

  .project-card-content {
    display: flex;
    a{
      color: #aaa;
    }
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
      width: 100%;
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
          <img src={projectImage} alt="project" />
        </div>
      </div>
    </ProjectCardWrapper>
  )
}

export default ProjectCard
